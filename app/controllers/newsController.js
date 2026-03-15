// app/controllers/newsController.js

exports.list = function(req, res) {
  res.render('news', { title: 'News - Travlr Getaways' });
};