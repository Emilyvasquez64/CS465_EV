// app/controllers/mainController.js

exports.home = function(req, res) {
  res.render('index', { title: 'Travlr Getaways' });
};
