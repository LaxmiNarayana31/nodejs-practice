// show file list in node js

// const fs = require('fs')
// fs.writeFileSync('code.txt', "Hello JavaScript") // it will create a code.txt file


// you can't access any file outside of your folder in node js. When you run node js inside a folder, the folder acts as a web server




// create multiple files through loop
const { log } = require('console');
const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'files')
console.log(dirPath);

// for (i = 0; i < 5; i++){
//     fs.writeFileSync(dirPath+ `/hello ${i}.txt`, "Hello ")
// }


fs.readdir(dirPath, (err, files) => {
    files.forEach((item) => {
        console.log("file name is: " + item);
    })
})