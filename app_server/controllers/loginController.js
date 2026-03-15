// app/controllers/loginController.js

exports.showLogin = function(req, res) {
  res.render('login', { title: 'Login - Travlr Getaways' });
};

exports.handleLogin = function(req, res) {
  var email    = req.body.email;
  var password = req.body.password;
  if (!email || !password) {
    return res.render('login', {
      title: 'Login - Travlr Getaways',
      error: 'Please enter your email and password.'
    });
  }
  // TODO: wire up real authentication
  res.redirect('/travel');
};