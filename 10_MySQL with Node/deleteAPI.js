const express = require("express");
const conn = require("config");
const app = express();

app.use(express.json())  // string data to JSON format

app.delete("/:id", (req, resp) => {
    conn.query("DELETE FROM users WHERE id = " + req.params.id, (error, result) => {
        if (err) throw Error
        resp.send(result)
    })
    resp.send(req.params.id)
})

app.listen(5000)