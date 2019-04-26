const fs = require("fs");
const axios = require("axios");

const getData = async () => {
  const response = await axios.get(
    "http://auction-api-us.worldofwarcraft.com/auction-data/bee0c77ef4404efae1127c10140867a5/auctions.json"
  );
  console.log("received data!");
  fs.writeFile("./data.json", JSON.stringify(response.data, null, " "), err => {
    if (err) console.error(err);
    console.log("created file");
  });
};

getData();
