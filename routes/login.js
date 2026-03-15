// routes/login.js
var express = require('express');
var router  = express.Router();
var loginController = require('../app_server/controllers/loginController');

router.get('/',  loginController.showLogin);
router.post('/', loginController.handleLogin);

module.exports = router;