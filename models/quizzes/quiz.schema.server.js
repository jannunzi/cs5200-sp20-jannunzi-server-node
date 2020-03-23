const mongoose = require('mongoose')
const questionSchema = require('../questions/questions.schema.server')
const questionModel = require('../questions/questions.model.server')
const quizSchema = mongoose.Schema({
    title: {type: String, default: 'New Quiz'},
    questionsAggregation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'QuestionModel'
        }
    ],
    questionsComposition: [
        questionSchema
    ],
    questionsEmbedded: [
        {
            title: {type: String, default: 'New Question'},
            question: String,
            points: Number
        }
    ]
}, {collection: 'quizzes'})
module.exports = quizSchema
