// routes/news.js
var express = require('express');
var router  = express.Router();
var newsController = require('../controllers/newsController');

router.get('/', newsController.list);

module.exports = router;