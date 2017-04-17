var express = require('express');
var request = require('request');
var conf = require('config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({"message": "Post requests only please"});
});

let server =    conf.get('server');
let endpoint =  conf.get('endpoint');

router.post('/', function(req, res) {

    if (req.headers['token']) {
        if (req.body.status_text && req.body.status_emoji) {

            let token = req.headers['token'];
            let encodedBody = encodeURIComponent(JSON.stringify(req.body))
            let url = server+endpoint+"?token="+token+"&profile="+encodedBody;

            request.get(url, function(err, httpResponse, body) {
                res.send({
                    "error": err,
                    "body": JSON.parse(body),
                })
            })
        } else {
            res.send({error: "Invalid body sent"});
        }
    } else {
        res.send({error: "Missing token..."});
    }

})

module.exports = router;
