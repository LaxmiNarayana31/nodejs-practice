// post API used when new data is inserted in a database 

const express = require("express");
const conn = require("config");
const app = express();

app.use(express.json())

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



app.post("/", (req, resp) => {
    const data = req.body
    // const data = { name: "Shiva", password: "3030", user_type: "visitor" }
    conn.query("Insert INTO users SSET ?", data, (error, result, fields) => {
        if (error) Error;
        resp.send(result)
    })
})

app.listen(5000)