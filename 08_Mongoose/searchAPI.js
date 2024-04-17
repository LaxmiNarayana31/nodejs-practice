// search with single field or multiple field

const express = require('./config');
const Produtcs = require("./products");

const app = express();

// string data to JSON format 
app.use(express.json)


// make a simple get route
app.get("/search/:key", async (req, resp) => {
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or": [
                {"name": {$regex: req.params.key}}, //  search with single field

                {"brand": {$regex: req.params.key}} //  search with multiple field 
            ]
        }
    )
    resp.send("Search Done")
})

app.listen(5000)

// IQ: can you search using get or post method 