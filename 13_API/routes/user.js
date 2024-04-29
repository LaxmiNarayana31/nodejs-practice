// all user routes are organized 

const express = require('express')
// const User = require("../models/user.js")
const router = express.Router()

const getAllUsers = require("../controllers/user.js")
const newUser = require("../controllers/user.js")
const specialFunc = require("../controllers/user.js")
const getUserDetail = require("../controllers/user.js")


// app.use("/users",userRouter) it is already added to routes
router.get('/all', getAllUsers) // getAllUsers defined in controllers

router.post('/new', newUser)

router.get("/userid/special", specialFunc)

router.get("/userid/:id", getUserDetail)

export default router

// This is called MVC(Model View Controlller)