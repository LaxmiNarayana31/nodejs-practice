// post API method: in a database, when require to save new data then post API is used

const express = require("express");
const dbConnect = require("..06_MongoDB/mongodb");

const app = express();

// how to get data in Node JS send by postman
app.use(express.json())


app.post('/', async (req, resp) => {
    // console.log(req.body);
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)
})


app.listen(5000);