// Insert data from MongoDB to node js

const dbConnect = require("./mongodb");
const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            { name: "MacBook", brand: "apple" },
            { name: "RealmeBook", brand: "Realme" },
            { name: "SamsungFold", brand: "Samsung" },
        ]
    );

  if (result.acknowledged) {
    console.log("Data Inserted");
  }
};

insert();