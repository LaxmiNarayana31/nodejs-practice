// put API method: Whenever you need to update the data put API method used

const express = require("express");
const dbConnect = require("..06_MongoDB/mongodb");

const app = express();

// how to get data in Node JS send by postman
app.use(express.json());

app.put("/:name", async (req, resp) => {
  // console.log(req.body)
  let data = await dbConnect();
  let result = data.updateOne(({ name: req.params.name }, { $set: req.body }));
  resp.send({ result: "update" });
});

app.listen(5000);
