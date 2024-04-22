const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// what if our complete app written in Node JS. No front-end libraries are used  
app.get("/getdata", (req, res) => {
    res.status(400).send("Error Occured")
})

// send file 
app.get("/getdata", (req, res) => {
    const file = fs.readFileSync("./index.html")
    res.sendFile(file, )
    res.sendFile("./index.html")
})


app.get("/", (req, res) => {
    const pathlocation = path.resolve();
    console.log(path.join(pathlocation,"Hello World"))
    res.sendFile("./index.html")
})

app.listen(5000, () => {
    console.log("Server is working");
})