// CRUD opearation with mongoose

const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-commerce");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });

  // create data in database
  const saveInDB = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "MacBook",
    price: 150000,
    brand: "Apple",
    category: "Laptop",
  });
  let result = await data.save();
  console.log(result);
};

main();

// update data in database
const updateInDB = async () => {
  const saveInDB = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "RealmeBook" },
    {
      $set: { price: 700 },
    }
  );
  console.log(data);
};

updateInDB();

// delete data in database
const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "MacBook" });
  console.log(data);
};

deleteInDB();

// read data in database
const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.find();
  // let data = await Product.find({name: "MacBook"}); // to find specific data
  console.log(data);
};

findInDB();
