const express = require("express");
const path = require("path");
const app = express();

express.static(path.join(path.resolve(), "public")); // it is a middleware so we can't use it directly

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  res.cookie("token", "iamin");
  res.redirect("/");
});

app.listen(5000, () => {
  console.log("Server is working");
});
