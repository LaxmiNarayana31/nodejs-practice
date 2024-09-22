// Read data from MongoDB to node js

const dbConnect = require("./mongodb");

// // 1st way to handle promises
// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data)
//     })
// })
// console.log(dbConnect());

// 2nd way to handle promises (Modern Syntax)
const main = async () => {
  let data = await dbConnect();
  data = await data.find({ name: "nord" }).toArray();
  console.log(data);
};

main();
