var createError = require('http-errors');
var express = require('express');
var __path__ = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var __fs__  = require('fs');
var apiRouter = require('./app_api/routes/index');

require('./app_api/models/db');

var indexRouter        = require('./app_server/routes/index');
var usersRouter        = require('./app_server/routes/users');
var travelRouter       = require('./app_server/routes/travel');
var newsRouter         = require('./app_server/routes/news');
var loginRouter        = require('./app_server/routes/login');
var signupRouter       = require('./app_server/routes/signup');
var adminRouter        = require('./app_server/routes/admin');
var reservationsRouter = require('./app_server/routes/reservations');
var checkoutRouter     = require('./app_server/routes/checkout');

var app = express();

// ─── View Engine Setup (Handlebars) ──────────────────────────────────────────
app.set('views', __path__.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

// Register partials SYNCHRONOUSLY so they are ready on first request
var partialsDir = __path__.join(__dirname, 'app_server/views/partials');
__fs__.readdirSync(partialsDir).forEach(function(file) {
  var name    = file.replace('.hbs', '');
  var content = __fs__.readFileSync(__path__.join(partialsDir, file), 'utf8');
  hbs.registerPartial(name, content);
});

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__path__.join(__dirname, 'public')));

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
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
}, apiRouter);

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