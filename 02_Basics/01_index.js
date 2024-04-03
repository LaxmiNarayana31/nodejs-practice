// Make a simple API (Application programming interface)

/* 
1) Make a server
2) create header and API body
3) Create an API with static data
4) Put data in another file
*/


const http = require('http')
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application\json' });
    resp.write(JSON.stringify({ name: "JavaScript", email: "javascript@gmail.com" }))
    resp.end()
}).listen(5000)