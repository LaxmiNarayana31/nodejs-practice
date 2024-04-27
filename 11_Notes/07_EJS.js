const express = require("express");
const path = require("path");
const app = express();

express.static(path.join(path.resolve(), "public")) // it is a middleware so we can't use it directly

app.use(express.static(path.join(path.resolve(), "public")))

// what if our complete app written in Node JS. No front-end libraries are used
// send index.html to the server 
app.get("/", (req, res) => {
    res.render("index.html")
    //res.render("index")
})


app.listen(5000, () => {
    console.log("Server is working");
})