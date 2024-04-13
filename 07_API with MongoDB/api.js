// get method in API

const express = require("express");
const dbConnect = require("..06_MongoDB/mongodb");

const app = express();


// Interview Ques: in the get method, we can pass body or not -> No
// http://localhost:5000/
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});


app.post("/", async (req, resp) => {
    resp.send({name:"sumit"})
});


app.listen(5000);