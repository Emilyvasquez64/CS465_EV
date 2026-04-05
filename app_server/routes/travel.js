// app_server/routes/travel.js
var express = require('express');
var router  = express.Router();
var travelController = require('../controllers/travelController');

// GET /travel — list all trips
router.get('/', travelController.list);

module.exports = router;