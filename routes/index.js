// routes/index.js
var express = require('express');
var router  = express.Router();
var mainController = require('../app_server/controllers/mainController');

router.get('/', mainController.home);

module.exports = router;
