var express = require('express');
var router = express.Router();
//var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('index')
});

//router.post('/', function (req, res, next) {
//    var email = req.body.email;
//    var user = new User({
//        firstName: "Kobus",
//        lastName: "Viljoen",
//        password: "myPassword",
//        email: email
//    });
//    user.save();
//   res.redirect('/');
//});

//router.get('/node', function (req, res, next) {
//    res.render('node');
//});

module.exports = router;
