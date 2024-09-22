// used to delete the data for API

const express = require("express");
const dbConnect = require("..06_MongoDB/mongodb");
const mongodb = require("mongodb");

const app = express();

// how to get data in Node JS send by postman
app.use(express.json());

app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send("done");
});

app.listen(5000);
