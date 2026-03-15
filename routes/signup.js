// routes/signup.js
var express = require('express');
var router  = express.Router();
var signupController = require('../app_server/controllers/signupController');

router.get('/',  signupController.showSignup);
router.post('/', signupController.handleSignup);

module.exports = router;