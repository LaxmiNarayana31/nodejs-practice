// Make basic server in node js

const http = require("http");

function dataControl(req, resp) {
  resp.write("<h1>Hello JavaScript</h1>");
  resp.end();
}
http.createServer(dataControl).listen(4500); // Run this server on port 4500 (http://localhost:4500/)

// Another implementation of above using arrow function
// http.createServer((req, resp) => {
//     resp.write("<h1>Hello JavaScript</h1>")
//     resp.end()
// }).listen(4500)
