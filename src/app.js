"use strict";

var express = require('express');
var app = express();

let status = require('./routes/status');

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.use('/status', status);

app.listen(3000, function () {
    console.log('Listening at localhost:3000');
})
