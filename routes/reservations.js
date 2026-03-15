// routes/reservations.js
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.render('reservations', { title: 'Reservations - Travlr Getaways' });
});

module.exports = router;
