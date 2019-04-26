const mongoose = require("mongoose");
const { Schema } = mongoose;

//define schema
const auctionSchema = new Schema({
  googleId: String
});

//hook up to mongoose
mongoose.model("auctions", auctionSchema);
