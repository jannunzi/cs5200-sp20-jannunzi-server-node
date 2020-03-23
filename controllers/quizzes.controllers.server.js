const quizzesDao = require('../daos/quizzes.dao.server')

module.exports = (app) => {

    createQuiz = (quiz) =>
        quizzesDao.createQuiz(quiz)
    deleteQuiz = (quizId) =>
        quizzesDao.deleteQuiz(quizId)
    findAllQuizzes = () =>
        quizzesDao.findAllQuizzes()

    app.post('/api/quizzes', (req, res) =>
        createQuiz(req.body)
            .then(newQuiz => res.json(newQuiz)))
    app.get('/api/quizzes', (req, res) =>
        findAllQuizzes()
            .then(quizzes => res.json(quizzes)))

    app.delete('/api/quizzes/:quizId', (req, res) =>
        deleteQuiz(req.params.quizId)
            .then(status => res.send(status)))
}
