const express = require('express');

const app = express();
const mongoose = require('mongoose');

// using middleware
app.use(express.json()) 

app.get('/', (req, res) => { 
   res.send("Server starts");
})


// make a database connection 
mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backend"
})
    .then(() => console.log("Database connected"))
    .catch(err => console.error(err));



// make schema
const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model( 'User', schema ); // create model from the schema

app.get('/', (req, resp) => {
    res.send("Server starts")
})


app.post("users/all", async (req, res) => { 
    const users = await User.create({
        name: "shiva",
        email: "shiva@gmail.com",
        password: "shiva123"
    })

    res.status(20).json({
        success: true,
        message: "Registered successfully",
        users: []
    })
})

// app.listen(4000, (req, res) => { 
//     console.log("Server is working");
// })



// try Dynamic routing
app.get("/user/special", async (req, res) => { 
     res.json({
        success: true,
        message: "Hello JavScript"
    })
})


app.get("/user/:id", async (req, res) => { 
    const { id } = req.params
    const user = await User.findById(id)

    res.json({
        success: true,
        user,
    })
})


app.listen(4000, (req, res) => { 
    console.log("Server is working");
})