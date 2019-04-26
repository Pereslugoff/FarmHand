const passport = require("passport");

module.exports = app => {
  app.get("/auth/bnet", passport.authenticate("bnet"));

  app.get(
    "/auth/bnet/callback",
    passport.authenticate("bnet")
    // (req, res) => {
    //   const token = req.user.token;
    //   // let manifest;
    //   axios
    //     .get(
    //       `https://us.api.blizzard.com/wow/auction/data/stormrage?locale=en_US&access_token=${token}`
    //     )
    //     .then(response => {
    //       manifest = response.data.files[0].url;
    //       console.log(manifest);
    //     })
    //     .catch(error => console.log("Error", error));
    // axios.get(manifest).then(response => console.log(response.data));
    // res.json({
    //   data: token
    // });
    // }
  );
};
