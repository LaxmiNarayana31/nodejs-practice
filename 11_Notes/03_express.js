// if any chance node_modules deleted simply type -> run npm i
const express = require("express");

const app = express();

// Routing
app.get("/", (req, res) => {
  res.send("HII");
  // res.statusCode(404) // 404 means not found
  res.sendStatus(404);
  res.sendStatus(500); // 500 means internal server error
});

app.listen(5000, () => {
  console.log("Server is working");
});
