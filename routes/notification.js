var express = require('express');
var router = express.Router();

var Pusher = require('pusher');
var escapeHTML = require('escape-html');

var app_id = process.env.PUSHER_APP_ID;
var app_key = process.env.PUSHER_APP_KEY;
var app_secret = process.env.PUSHER_APP_SECRET;

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