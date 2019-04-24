const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const passport = require("passport");
const auth = require("./auth");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "..", "public")));
auth(passport);
app.use(passport.initialize());

app.get("/auth/bnet", passport.authenticate("bnet"));

app.get(
  "/auth/bnet/callback",
  passport.authenticate("bnet", { failureRedirect: "/" }),
  (req, res) => {
    const token = req.user.token;
    let manifest;
    axios
      .get(
        `https://us.api.blizzard.com/wow/auction/data/stormrage?locale=en_US&access_token=${token}`
      )
      .then(response => {
        manifest = response.data.files[0].url;
        console.log(manifest);
      })
      .catch(error => console.log("Error", error));
    axios.get(manifest).then(response => console.log(response.data));
    res.json({
      data: token
    });
  }
);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen({ port }, function() {
  console.log(`Your server, listening on port ${port}`);
});
