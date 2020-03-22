const mongoose = require('mongoose')
const enrollmentsSchemna = require('./enrollments.schema.server')
const enrollmentsModel = mongoose
    .model(
        'EnrollmentModel',
        enrollmentsSchemna
    )
module.exports = enrollmentsModel
