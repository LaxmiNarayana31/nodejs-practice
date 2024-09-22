// connecction of MySQL with Node JS
// npm i mysql

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

// to check connection is eastablished or not
conn.connect((err) => {
  if (err) {
    console.warn("Error");
  } else {
    console.warn("Connected");
  }
});

// fetch the data
conn.query("select * from users", (err, res) => {
  console.warn("result", result);
});
