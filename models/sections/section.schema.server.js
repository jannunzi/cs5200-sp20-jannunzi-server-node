const mongoose = require('mongoose')
const sectionSchema = mongoose.Schema({
    name: String,
    seats: Number,
    course: String
}, {collection: 'sections'});
module.exports = sectionSchema;
