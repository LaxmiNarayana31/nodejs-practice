// Template engine 

const express = require("express");

const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "HTML");

app.set("view engine", "ejs");

// http://localhost:5000/
app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});


// http://localhost:5000/profile
app.get("/profile", (req, resp) => {
  const user = {
    name: "Shiva",
    email: "shiva@gmail.com",
    country: "india",
  };
  resp.render("profile", {user});
});


// http://localhost:5000/about
app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});


// http://localhost:5000/help
app.get("/help", (req, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});


// http://localhost:5000/contact
// This is 404 page where page is not found
app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/pageNotFound.html`);
});

app.listen(5000);