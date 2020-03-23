const questionModel = require('../models/questions/questions.model.server')
const quizModel = require('../models/quizzes/quiz.model.server')

const addQuestionToQuiz = (quizId, question) => {
    question.quiz = quizId
    return questionModel.create(question)
        .then(newQuestion => quizModel
            .update(
                {_id: quizId},
                {
                    $push: {
                        questionsAggregation: newQuestion._id,
                        questionsComposition: newQuestion,
                        questionsEmbedded:    newQuestion
                    }
                })
        ).then(status =>
            quizModel.findById(quizId)
                .populate('questionsAggregation', 'title'))
}

const removeQuestionFromQuiz = (quizId, questionId) =>
    questionModel.remove({_id: questionId})
        .then(status =>
            quizModel.update(
                {_id: quizId},
                {
                    $pull: {
                        questionsAggregation: {_id: questionId},
                        questionsComposition: {_id: questionId},
                        questionsEmbedded:    {_id: questionId}
                    }
                }))
        .then(status =>
            quizModel.findById(quizId)
                .populate('questionsAggregation', 'title'))


module.exports = {
    addQuestionToQuiz,
    removeQuestionFromQuiz
}
