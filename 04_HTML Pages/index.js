const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "HTML");

// app.use(express.static(publicPath)); // static: it is used to load static pages means no backend

// remove file extension from our wesite like .html from our website

// http://localhost:5000/
app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
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
