const passport = require("passport");
const BnetStrategy = require("passport-bnet").Strategy;
const axios = require("axios");
require("dotenv").config();

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
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken : ", accessToken);
      console.log("refreshToken : ", refreshToken);
      console.log("profile : ", profile);

      // let manifest;
      axios
        .get(
          `https://us.api.blizzard.com/wow/auction/data/stormrage?locale=en_US&access_token=${accessToken}`
        )
        .then(response => {
          console.log("request url", response.data.files[0].url);
        })
        .catch(error => console.log("Error", error));
    }
  )
);
