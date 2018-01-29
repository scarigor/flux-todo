import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import session from 'express-session';
const MongoStore = require('connect-mongo')(session);
import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
const LocalStrategy = require('passport-local').Strategy;
import todos from './src/routes/todos';
import users from './src/routes/users';
import User from './src/models/user';

const app = express()

dotenv.config();
mongoose.connect(process.env.MONGO_DB_URL, { useMongoClient: true })

app.use(bodyParser.json());

app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/todos', todos);
app.use('/api/auth', users);

// Simple route works fine
// app.post('/api/auth/login', (req, res) => {
//   const { email, password } = req.body.data
//
//   console.log(email + " " + password)
// });

app.post('/api/auth/login', passport.authenticate('local'), (req, res) => {
  console.log(req.session.passport.user)
  return res.json(req.user);
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    // passReqToCallback: true
  },
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      if (!user.isValidPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(
  process.env.PORT,
  () => console.log("Running at " + process.env.PORT)
)
