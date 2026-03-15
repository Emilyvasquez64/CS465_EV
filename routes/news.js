// routes/news.js
var express = require('express');
var router  = express.Router();
var newsController = require('../app/controllers/newsController');

router.get('/', newsController.list);

module.exports = router;