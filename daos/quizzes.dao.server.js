const quizModel = require('../models/quizzes/quiz.model.server')

createQuiz = (quiz) =>
    quizModel.create(quiz)
deleteQuiz = (quizId) =>
    quizModel.deleteOne({_id: quizId})
findAllQuizzes = () =>
    quizModel.find()
        .populate('questionsAggregation', 'title')

module.exports = {
    createQuiz,
    findAllQuizzes,
    deleteQuiz
}
