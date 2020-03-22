const enrollmentModel = require('../models/enrollments/enrollments.model.server')
const enrollStudentInSection = (
    studentId, sectionId
) => enrollmentModel.create({
    student: studentId,
    section: sectionId
});

const findAllEnrollments = () =>
    enrollmentModel
        .find()
        .populate('student', 'username')
        .populate('section', 'name')
        .exec()

const findStudentsInSection = (sectionId) =>
    enrollmentModel
        .find({section: sectionId})
        .populate('student')
        .exec()

const findSectionsStudentEnrolledIn = (studentId) =>
    enrollmentModel
        .find({student: studentId})
        .populate('section', 'name')
        .exec()

module.exports = {
    enrollStudentInSection,
    findAllEnrollments,
    findStudentsInSection,
    findSectionsStudentEnrolledIn
};
