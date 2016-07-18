var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, doc) {
        if (err) {
            return res.status(400).json({
                title: 'An errors occurred',
                error: err
            });
        }

        if (!doc) {
            return res.status(404).json({
                title: 'No user found',
                error: {message: 'User could not be found.'}
            });
        }

        if (!passwordHash.verify(req.body.password, doc.password)) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Password Invalid.'}
            });
        }

        var token = jwt.sign({user: doc}, 'secretKey', {expiresIn: 7200});

        res.status(200).json({
            message: 'Success',
            token: token,
            userId: doc._id
        });

    })
});

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
                title: 'An errors occurred',
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