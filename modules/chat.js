const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testingDb");


const chatSchema= mongoose.Schema({
    messages: [{
        type: String,
    }]
})


module.exports = mongoose.model("chat", chatSchema );