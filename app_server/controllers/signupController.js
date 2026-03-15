// app/controllers/signupController.js

exports.showSignup = function(req, res) {
  res.render('signup', { title: 'Sign Up - Travlr Getaways' });
};

exports.handleSignup = function(req, res) {
  var name       = req.body.name;
  var email      = req.body.email;
  var password   = req.body.password;
  var repassword = req.body.repassword;
  var agree      = req.body.agree;

  if (!name || !email || !password || !repassword) {
    return res.render('signup', { title: 'Sign Up - Travlr Getaways', error: 'Please fill in all required fields.' });
  }
  if (password !== repassword) {
    return res.render('signup', { title: 'Sign Up - Travlr Getaways', error: 'Passwords do not match.' });
  }
  if (!agree) {
    return res.render('signup', { title: 'Sign Up - Travlr Getaways', error: 'You must agree to the Terms of Use and Privacy Policy.' });
  }
  // TODO: wire up real registration
  res.redirect('/login');
};