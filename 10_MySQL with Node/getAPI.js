// to get all the data from database use get API

const express = require("express");
const conn = require("config");
const app = express();
app.get("/", (req, resp) => {
    // resp.send("Route done")
    conn.query("select * from users", (err, result) => {
        if (err) {
            resp.send("Error")
        } else {
            resp.send(result)
        }
    })
})

app.listen(5000)