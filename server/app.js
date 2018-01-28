import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import todos from './src/routes/todos';
import users from './src/routes/users';
import User from './src/models/user';

const app = express()

dotenv.config();
mongoose.connect(process.env.MONGO_ATLAS_CONFIG, { useMongoClient: true })

app.use(bodyParser.json());
// app.use(session({ secret: "cats" }));
app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/todos', todos);
app.use('/api/users', users);

passport.use(new LocalStrategy(
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

app.post('/api/auth/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log("hello")
    // return res.status(200).json(req.user)
});


app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(process.env.PORT)
