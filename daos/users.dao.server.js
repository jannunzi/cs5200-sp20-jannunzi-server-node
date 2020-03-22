const userModel = require('../models/users/users.model.server')

const createUser = (user) =>
    userModel
        .create(user)

const findAllUsers = () =>
    userModel.find()

const findUserByUsername = (username) =>
    userModel.findOne({username: username})

const findUserById = (userId) =>
    userModel.findById(userId)

const findUsersFirstName = (userId) =>
    userModel.findOne({_id: userId}, {firstName: 1, _id: 0})

module.exports = {
    createUser,
    findAllUsers,
    findUserByUsername,
    findUserById,
    findUsersFirstName
}
