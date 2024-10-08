// Render HTML and JSON

const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send(`
    <h1>Welcome to Home page</h1>
    <a href="/about">Go to About page</a>
    `);
});

app.get("/about", (req, resp) => {
  resp.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"  />
    <button>Click</button>
    <a href="/">Go to Home page</a>
    `);
});

app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "shiva",
      email: "shiva@gmail.com",
    },
    {
      name: "sumit",
      email: "sumit@gmail.com",
    },
  ]);
});

app.listen(5000);
