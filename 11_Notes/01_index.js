// Create a server

const http = require("http")

const server = http.createServer((req, resp) => {
    if (req.url === "/about") {
        resp.end("<h1>About Page</h1>")
    }
    else if (req.url === "/") {
        resp.end("<h1>Home Page</h1>")
    }
    else if (req.url === "/contact") {
        resp.end("<h1>Contact Page</h1>")
    } else {
        resp.end("Page Not Found")
    }
    
})

server.listen(5000, () => {
    console.log("Server is start");
})