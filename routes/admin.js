// routes/admin.js
var express = require('express');
var router  = express.Router();
var adminController = require('../app_server/controllers/adminController');

router.get('/',  adminController.showAdmin);
router.post('/', adminController.handleSave);

module.exports = router;