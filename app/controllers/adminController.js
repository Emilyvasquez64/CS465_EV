// app/controllers/adminController.js

exports.showAdmin = function(req, res) {
  res.render('admin', { title: 'Admin - Travlr Getaways', layout: false });
};

exports.handleSave = function(req, res) {
  // TODO: persist to database
  console.log('Trip saved:', req.body);
  res.redirect('/travel');
};