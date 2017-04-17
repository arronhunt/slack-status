"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

let status = require('./routes/status');

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.use(bodyParser.json());                       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies

app.use('/status', status);

app.listen(3000, function () {
    console.log('Listening at localhost:3000');
})
