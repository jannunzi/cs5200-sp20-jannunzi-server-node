const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    title: {type: String, default: 'New Question'},
    question: String,
    points: Number
})
module.exports = questionSchema
