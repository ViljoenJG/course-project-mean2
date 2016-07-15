var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');

var User = require('../models/user');

router.post('/', function (req, res, next) {
   var user = new User({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       password: passwordHash.generate(req.body.password),
       email: req.body.email
   });
    user.save(function (err, result) {
        if (err) {
            return res.status(400).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        })
    })
});

module.exports = router;