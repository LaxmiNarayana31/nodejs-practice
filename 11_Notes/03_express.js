// if any chance node_modules deleted simply type -> run npm i 
const express = require("express");

const app = express();

// Routing
app.get("/", (req, res) => {
    res.send("HII");
    res.statusCode(404)
})

app.listen(5000, () => {
    console.log("Server is working");
})