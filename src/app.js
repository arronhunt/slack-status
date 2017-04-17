"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var conf = require('config');
var app = express();

let status = require('./routes/status');

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.use(bodyParser.json());                       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies

app.use('/status', status);

app.listen(conf.get('port'), function () {
    console.log('Listening at localhost:'+conf.get('port'));
})
