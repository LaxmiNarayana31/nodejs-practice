// Mongoose: A npm package that connect node js with MongoDB

const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-commerce");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
    
  const ProductsModel = mongoose.model(("products", ProductSchema));
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

// IQ: By using request, to get the body waht you will be used. -> bodyparser or express.json function