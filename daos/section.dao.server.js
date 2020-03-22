const sectionModel = require('../models/sections/section.model.server')
const findAllSections = () =>
    sectionModel.find()
module.exports = {
    findAllSections
}
