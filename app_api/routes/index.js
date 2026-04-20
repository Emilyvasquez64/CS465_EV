const express        = require('express');
const router         = express.Router();
const jwt            = require('jsonwebtoken');
const tripsController = require('../controllers/trips');
const authController  = require('../controllers/authentication');

// JWT Authentication middleware
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    console.log('Null Bearer Token');
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) return res.sendStatus(401);
    req.auth = verified;
  });
  next();
}

// Auth routes
router.post('/register', authController.register);
router.post('/login',    authController.login);

// Trip routes
router.get('/trips',              tripsController.tripsList);
router.get('/trips/:tripCode',    tripsController.tripsFindCode);
router.post('/trips',             authenticateJWT, tripsController.tripsAddTrip);
router.put('/trips/:tripCode',    authenticateJWT, tripsController.tripsUpdateTrip);
router.delete('/trips/:tripCode', authenticateJWT, tripsController.tripsDeleteTrip);

module.exports = router;