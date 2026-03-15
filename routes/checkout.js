// routes/checkout.js
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.render('checkout', { title: 'Checkout - Travlr Getaways' });
});

module.exports = router;
