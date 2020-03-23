// load express library to create HTTP server
var express = require('express')
var app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/whiteboard-cs5200-sp20')

// load body parser library to parse JSON from HTTP BODY
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configure CORS to give clients access from other domains
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes.controllers.server')(app)

// start server listening at port 3000 for HTTP requests
app.listen(4000)

