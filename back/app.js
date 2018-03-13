var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes');
var User = require('./models/users');
var db = require('./config/db')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cors = require('cors'); 
var session = require('express-session');
const create=require('./seeders')
create()

var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'.split(', '),
}

app.use(cors(corsOptions));

<<<<<<< HEAD
app.use(session({ 
  secret: 'niño de cobre',
  resave: false,
  saveUninitialized: false
}))
=======
app.use(session({ secret: 'niño de cobre' }))
>>>>>>> f2d4b63f65fcdd774b6e9ee1689ef948c6b103ae

app.use(passport.initialize());
app.use(passport.session());

// use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// passport.deserializeUser(User.deserializeUser());
passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (email, password, done) {
    User.findOne({
      where:{
         email: email 
        }})
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
    .catch((err) => {
      console.log(err)
    })
  }
));

  app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next()
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger(':method :url :status'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

db.sync({force: false})
.then (() => {
    app.listen(3005,() => console.log('listening on port 3005'))
})

module.exports = app;