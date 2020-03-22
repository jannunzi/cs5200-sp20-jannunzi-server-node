
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/whiteboard-cs5200-sp20')

const userDao = require('./daos/users.dao.server')
const sectionDao = require('./daos/section.dao.server')
const enrollmentsDao = require('./daos/enrollments.dao.server')

enrollmentsDao
    .findSectionsStudentEnrolledIn('5e6674283e5eb6ca36f1ce75')
    .then(sections => console.log(sections))

// enrollmentsDao
//     .findStudentsInSection('5e6675503e5eb6ca36f1ce79')
//     .then(students => console.log(students))

// enrollmentsDao
//     .findAllEnrollments()
//     .then(enrollments => console.log(enrollments))

// enrollmentsDao
//     .enrollStudentInSection(
//         '5e6674283e5eb6ca36f1ce75',
//         '5e6675493e5eb6ca36f1ce78'
//     ).then(enrollment => console.log(enrollment))

// sectionDao
//     .findAllSections()
//     .then(sections => console.log(sections))

// userDao
//     userDao.findUsersFirstName('5e6674283e5eb6ca36f1ce75')
//     .then((results) => {
//         console.log(results)
//     })
