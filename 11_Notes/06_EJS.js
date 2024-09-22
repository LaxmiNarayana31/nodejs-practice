// EJS -> Embedded JavaScript templates

const express = require("express");
const path = require("path");
const app = express();

express.static(path.join(path.resolve(), "public")); // it is a middleware so we can't use it directly

app.use(express.static(path.join(path.resolve(), "public")));

// Setting up View Engine
app.set("view engine", "ejs");

// what if our complete app written in Node JS. No front-end libraries are used
app.get("/", (req, res) => {
  res.render("index", { name: "Shiva" });
});

app.listen(5000, () => {
  console.log("Server is working");
});
