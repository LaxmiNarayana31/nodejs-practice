// get, delete, put API method in mongoose

const express = require("express");
require('./config');
const Produtcs = require("./products");

const app = express();

// Whenever data is come it comes in string format. so need to convert to JSON format
app.use(express.json)

app.post("/create", async (req, resp) => {
    let data = Product(req, resp);
    let result = await data.save()
    console.log(result);
    resp.send("Done");
})


// get method
app.get("/list", async (req, resp) => {
    let data = await Product.find()
    resp.send(data)
})

app.listen(5000)


// delete method
app.delete("/delete/:id", async (req, resp) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params)
    resp.send(data)
})


// put method