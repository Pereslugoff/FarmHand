const BnetStrategy = require("passport-bnet").Strategy;
require("dotenv").config();

module.exports = passport => {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(
    new BnetStrategy(
      {
        clientID: process.env.BNET_ID,
        clientSecret: process.env.BNET_SECRET,
        callbackURL: "http://localhost:3000/auth/bnet/callback",
        region: "us"
      },
      (req, accessToken, refreshToken, profile, done) => {
        return done(null, {
          profile: profile,
          token: profile.token
        });
      }
    )
  );
};
