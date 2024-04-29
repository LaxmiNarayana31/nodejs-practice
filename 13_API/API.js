// This file is organized into different routes, controllers, models

const express = require('express');

const app = express();
const mongoose = require('mongoose');

const userRouter = require("./routes/user.js")

// using middleware
app.use(express.json()) 
app.use("/users", userRouter)

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


// get all users
router.get('/users/all', async (req, resp) => { 
    constusers = await User.find({})

    const keyword = req.query.keyword
    console.log(keyword);

    read.json({
        success: true,
        users,
    })
})

// app.listen(4000, (req, res) => {
//     console.log("Server is working");
// })


// new user
app.post('/users/new', async (req, res) => { 
    const { name, email, password } = req.body
    
    await User.create({
        name,
        email,
        password
    })
    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message:"User created successfully"
    })
})


// try Dynamic routing
app.get("/userid/special", async (req, res) => { 
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