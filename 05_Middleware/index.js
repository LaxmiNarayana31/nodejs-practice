/*  
Middleware in node js is a software design pattern that allow developers to add functionality to their applications without modifying the core code.

It is a function that is executed between the request and respone cycles of an application. Middleware function have access to the request and respone object and can be used to modify them or perform other tasks, such as logging, authentication, data transformation and error handling.

It is 5 types: 
1) Application level middleware (app.use)
2) Router level middleware (router.use)
3) Built-in middleware (express.static, express.json, express.urlencoded)
4) Error handling middleware ( app.use(err,req,res,next) )
5) Thirdparty middleware (bodyparser, cookieparser) 
*/


const express = require('express');
const app = express();


// make a middleware
const reqFilter = (req, res, next) => {
    // console.log(reqFilter);

    next();
};
app.use(reqFilter);


// http://localhost:5000/
app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});


// http://localhost:5000/users
app.get("/users", (req, resp) => {
  resp.send("Welcome to Users Page");
});


app.listen(5000); 