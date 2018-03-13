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
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// var cors = require('cors'); 
var session = require('express-session');
const create=require('./seeders')


// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions));

app.use(session({ secret: 'niño de cobre' }))

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static('./public'));
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
passport.use(new FacebookStrategy({
  clientID: 156258978423467,
  clientSecret: '2eb4087000b45879ec370a9b9ee68332',
  callbackURL: "http://localhost:3005/users/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  console.log("AIUDAAAAAAAAAAAAAAAAAAAAAA",profile)
  User.findOrCreate({where:{facebookId:profile.id},defaults:{fullName:profile.displayName}})
  .then((user) => {
    done(null, user[0]);
  })
  .catch(err => done(err));
}
));
passport.use(new GoogleStrategy({
  clientID: "921152971758-5pnnrjq7h9n50147j2qpfhvv77d9ou9j.apps.googleusercontent.com",
  clientSecret: "3VAf_vHNwwYYo8Y-4tQt5-Lo",
  callbackURL: "http://localhost:3005/users/auth/google/callback"
},
function(token, tokenSecret, profile, done) {
  console.log("AQUIIIIIIIIIIIIIIIIII WEON",profile)
    User.findOrCreate({where:{ googleId: profile.id }})
    .then((user) => {
      done(null, user[0]);
    })
    .catch(err => done(err));
  }
  ));

  app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next()
  })

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger(':method :url :status'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

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

db.sync({force: true})
.then (() => {
  create()
  app.listen(3005,() => console.log('listening on port 3000'))
})

module.exports = app;