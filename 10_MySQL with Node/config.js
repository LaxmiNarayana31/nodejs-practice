const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});


conn.connect((eerr) => {
    if (err) {
        console.warn("error in connection")
    } 
})

module.exports = conn;