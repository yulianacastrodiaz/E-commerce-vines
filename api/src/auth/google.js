const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('../db.js')

const GOOGLE_CLIENT_ID = "59387019223-5n4oldstcuejaalechslta5lrj2ssvhj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "_JHXx96NgWCRO2yijtcsDpk-";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));


  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

//module.export = passport