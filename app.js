var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var fs  = require('fs');

var indexRouter      = require('./routes/index');
var usersRouter      = require('./routes/users');
var travelRouter     = require('./routes/travel');
var newsRouter       = require('./routes/news');
var loginRouter      = require('./routes/login');
var signupRouter     = require('./routes/signup');
var adminRouter        = require('./routes/admin');
var reservationsRouter = require('./routes/reservations');
var checkoutRouter     = require('./routes/checkout');

var app = express();

// ─── View Engine Setup (Handlebars) ──────────────────────────────────────────
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Register partials SYNCHRONOUSLY so they are ready on first request
var partialsDir = path.join(__dirname, 'views/partials');
fs.readdirSync(partialsDir).forEach(function(file) {
  var name    = file.replace('.hbs', '');
  var content = fs.readFileSync(path.join(partialsDir, file), 'utf8');
  hbs.registerPartial(name, content);
});

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/',             indexRouter);
app.use('/users',        usersRouter);
app.use('/travel',       travelRouter);
app.use('/news',         newsRouter);
app.use('/login',        loginRouter);
app.use('/signup',       signupRouter);
app.use('/admin',        adminRouter);
app.use('/reservations', reservationsRouter);
app.use('/checkout',     checkoutRouter);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use(function(req, res, next) {
  next(createError(404));
});

// ─── Error Handler ───────────────────────────────────────────────────────────
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;