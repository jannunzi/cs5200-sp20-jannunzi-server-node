const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    title: {type: String, default: 'New Question'},
    question: String,
    points: Number,
    questionType: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE']},
    quiz: {type: mongoose.Schema.Types.ObjectId, ref: "QuizModel"}
}, {collection: 'questions'})
module.exports = questionSchema
