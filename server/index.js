const path = require("path");
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
require("./models/Auction");
require("./passport");

mongoose.connect(process.env.MONGO_URL);
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(passport.initialize());

require("./routes/authRoutes")(app);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Your server, listening on port ${PORT}`);
});
