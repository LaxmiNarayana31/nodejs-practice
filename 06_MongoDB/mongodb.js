// configuration file of database connection

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = "ecomm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  result.db(databaseName);
  return db.collection("products");
}

module.exports = dbConnect;
