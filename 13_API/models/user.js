
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

export const User = mongoose.model('User', schema); // create model from the schema