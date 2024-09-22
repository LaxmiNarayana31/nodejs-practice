// put API used to update the data in database

const express = require("express");
const conn = require("config");
const app = express();

app.use(express.json()); // string data to JSON format

// app.get("/", (req, resp) => {
//     // resp.send("Route done")
//     conn.query("select * from users", (err, result) => {
//         if (err) {
//             resp.send("Error")
//         } else {
//             resp.send(result)
//         }
//     })
// })

app.put("/", (req, resp) => {
  const data = ["shiva", "1234", "reader"];
  conn.query(
    "UPDATE users SET name = ?, password = ?, user_type = ?, where id = ?"
  );
  if (error) throw error;

  resp.send("Update API working");
});

app.listen(5000);
