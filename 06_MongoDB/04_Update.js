// Update data from MongoDB to node js

const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "MacBook" },
    {
      // this is for condition
      $set: { name: "MacBook-Air" }, // update data
    }
  );
  console.warn(result);
};

updateData();
