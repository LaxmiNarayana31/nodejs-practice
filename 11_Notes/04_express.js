const express = require("express");

const app = express();

// Send JSON data 
// run this and open http://localhost:5000/
app.get("/", (req, res) => {
    res.json({
        name: "Shiva",
        country: "India",
        Age: 22
    })
})


// http://localhost:5000/getinfo
app.get("/getinfo", (req, res) => {
    res.json({
        name: "Sumit",
        country: "India",
        Age: 23
    })
})

app.listen(5000, () => {
    console.log("Server is working");
})