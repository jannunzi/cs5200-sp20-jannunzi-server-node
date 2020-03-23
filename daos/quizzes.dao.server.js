const quizModel = require('../models/quizzes/quiz.model.server')

createQuiz = (quiz) =>
    quizModel.create(quiz)
findAllQuizzes = () =>
    quizModel.find()

module.exports = {
    createQuiz,
    findAllQuizzes
}
