// routes/travel.js
var express = require('express');
var router  = express.Router();
var travelController = require('../app/controllers/travelController');

// GET /travel — list all trips, supports ?category=beaches|cruises|mountains
router.get('/',    travelController.list);

// GET /travel/:id — single trip detail
router.get('/:id', travelController.detail);

module.exports = router;