// routes/news.js
var express = require('express');
var router  = express.Router();
var newsController = require('../app_server/controllers/newsController');

router.get('/', newsController.list);

module.exports = router;