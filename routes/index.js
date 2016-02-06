var express = require('express');
var router = express.Router();

var Pusher = require('pusher');
var escapeHTML = require('escape-html');

router.get('/', function(req, res) {
    res.render('index');
});

var pusher = new Pusher({
    appId: '175596',
    key: 'cd9951d61752cd6abe9c',
    secret: 'fce12418576dd52b411d'
});

router.post('/notification', function(req, res){
    var message = escapeHTML(req.param('message'));
    pusher.trigger('notifications', 'new_notification', {
        message: message
    });
    res.send("Notification triggered!")
});

module.exports = router;