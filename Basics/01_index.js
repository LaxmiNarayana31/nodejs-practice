/* Node JS is not a programming language, It is a run-time envirnoment that allows developers to build server-side applications and services. It is based on the V8 JavaScript engine, which was developed by Google. 

Node.js is single threaded means it executes one command at a time.

console.log() in node and console.log() in browser are not same.
It is a debugging tool in node.

Core modules -> Every prgramming language has already have some predefined modules that is called Core modules. Ex: console.log()

core modules is 2 types: Global & Non-Global
some modules no need to import for use called Global modules and other are called Non-Global
*/


const fs = require('fs');
// fs.writeFileSync("hello.text", "This will create a file called hello.txt")
console.log(__dirname)