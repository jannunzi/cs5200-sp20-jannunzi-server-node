const questionDao = require('../daos/questions.dao.server')

module.exports = (app) => {
    addQuestionToQuiz = (quizId, question) =>
        questionDao.addQuestionToQuiz(quizId, question)
    removeQuestionFromQuiz = (quizId, questionId) =>
        questionDao.removeQuestionFromQuiz(quizId, questionId)

    app.post("/api/quizzes/:quizId/questions", (req, res) =>
        addQuestionToQuiz(req.params['quizId'], req.body)
            .then(quiz => res.json(quiz))
    )
    app.delete("/api/quizzes/:quizId/questions/:questionId", (req, res) =>
        removeQuestionFromQuiz(req.params.quizId, req.params.questionId)
            .then(quiz => res.json(quiz))
    )
}
