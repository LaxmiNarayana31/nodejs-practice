// create postAPI using mongoose

const express = require("express");
require("./config");
const Produtcs = require("./products");

const app = express();

// Whenever data is come it comes in string format. so need to convert to JSON format
app.use(express.json);

app.post("/create", async (req, resp) => {
  let data = Produtcs(req, resp);
  let result = await data.save();
  console.log(result);
  resp.send("Done");
});

app.listen(5000);
