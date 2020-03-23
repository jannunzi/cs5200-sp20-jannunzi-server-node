const quizzesDao = require('../daos/quizzes.dao.server')

module.exports = (app) => {
    app.get('/api/quizzes', (req, res) =>
        quizzesDao.findAllQuizzes()
            .then(quizzes => res.json(quizzes))
    )
}
