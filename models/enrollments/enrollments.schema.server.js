const mongoose = require('mongoose')
const enrollmentSchema = mongoose.Schema({
    letterGrade: {type: String, default: 'A'},
    numberGrade: Number,
    feedback: String,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SectionModel'
    }
}, {collection: "enrollments"});
module.exports = enrollmentSchema;
