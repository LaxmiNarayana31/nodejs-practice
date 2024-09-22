// Delete data from MongoDB to node js

const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteOne({ name: "SamsungFold" });
  // let result2 = await data.deleteMany({ name: "SamsungFold" }) // delete multiple records
  console.warn(result);

  if (result.acknowledged) {
    console.log("Record deleted");
  }
};

deleteData();
