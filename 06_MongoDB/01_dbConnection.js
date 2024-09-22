// Connect MongoDB with Node JS

// const MongoClient = require('mongodb').MongoClient; // older syntax
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "ecomm"; // ecomm is the database name
const client = new MongoClient(url);

// sometimes when you fetch data it requires time, to handle this we use promises
async function getData() {
  let result = await client.connect();
  result.db(database);

  // in database there is many collection, which collection do you want to connect
  let collection = db.collection("product"); // product is a collection name

  // console.log(collection.find({}).toArray());

  // To handle the promise use await
  let respone = await collection.find({}).toArray();
  console.log(respone);
}

getData();
