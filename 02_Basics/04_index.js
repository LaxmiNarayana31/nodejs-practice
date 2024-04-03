//  CRUD with file system

const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "CRUD");
// console.log(dirPath);


/* Run one by one opeartion */

// Create file 
const filePath = `${dirPath}/code.txt`
fs.writeFileSync(filePath, "javaScript learning");



// Read file
fs.readFile(filePath,'utf8', (error, item) => {  // remove utf8 and try to run 
    console.log(item);
})




// Update file
fs.appendFile(filePath, "Hello VS Code", (error) => {
    if (!error) {
        console.log("file content is updated");
    }
})




// Rename file
fs.rename(filePath, `${dirPath}/rename.txt`, (error) => {
    if (!error) {
        console.log("file name is updated");
    }
})




// Delete file
fs.unlinkSync(`${dirPath}/rename.txt`)


/* Note: What is Buffer ?
Buffer is a temporary memory location
*/