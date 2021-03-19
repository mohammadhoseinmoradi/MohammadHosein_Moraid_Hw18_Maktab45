const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const gneralTools = require('../../tools/gneraltTools')
const User_info = require('../../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';







router.get('/dashboard', (req, res) => {

    User_info.find({ _id: req.session.user._id }, (err, user) => {
        if (err) return res.status(500).send();
        res.render('dashboard')
    })

});
router.get('/Info', (req, res) => {

    User_info.find({ _id: req.session.user }, (err, user) => {
        if (err) return res.status(500).send();

        res.json(user)
    })

});
router.put('/Edit', (req, res) => {

    if (req.body.Password == "" && req.body.birth == "") {

        User_info.findOneAndUpdate({
            _id: req.session.user
        }, {
            $set: {
                User_Name: req.body.User_Name,
                User_First_Name: req.body.First_Name,
                User_Last_Name: req.body.Last_Name,
                User_Gender: req.body.Gender,
                User_Email: req.body.Email,
                User_Number: req.body.number,
            }
        }, (err, user) => {
            console.log(user);
            console.log(err);
            if (err) return res.status(500).json({
                msg: "Server Error :) 77777777777777777777777777777777777777777777777777777777777777",
                err: err.msg
            });

            res.send('ok')
        })
    } else if (req.body.Password == "") {

        User_info.findOneAndUpdate({
            _id: req.session.user
        }, {
            $set: {


                User_Name: req.body.User_Name,
                User_First_Name: req.body.First_Name,
                User_Last_Name: req.body.Last_Name,
                User_Gender: req.body.Gender,
                User_Email: req.body.Email,
                User_Birthday: req.body.birth,
                User_Number: req.body.number,
            }
        }, (err, user) => {
            if (err) return res.status(500).json({
                msg: "Server Error :)",
                err: err.msg
            });
            res.send('ok')
        })
    } else if (req.body.birth == "") {

        bcrypt.hash(req.body.Password, saltRounds, function(err, hash) {
            if (err) {
                return res.status(500).send();

            };

            Hash_Pass = hash;

            User_info.findOneAndUpdate({
                _id: req.session.user
            }, {
                $set: {
                    User_Name: req.body.User_Name,
                    User_First_Name: req.body.First_Name,
                    User_Last_Name: req.body.Last_Name,
                    User_Gender: req.body.Gender,
                    User_Email: req.body.Email,
                    User_Number: req.body.number,
                    User_Password: Hash_Pass
                }
            }, (err, company) => {
                console.log(company);
                if (err) return res.status(500).json({
                    msg: "Server Error :)",
                    err: err.msg
                })
                req.session.destroy(function(err) {
                    if (err) return res.status(500).send('Server Error :(')
                });
                res.send('ok')

            });
        });
    } else {

        bcrypt.hash(req.body.Password, saltRounds, function(err, hash) {
            if (err) {
                return res.status(500).send();
            };

            Hash_Pass = hash;

            User_info.findOneAndUpdate({
                _id: req.session.user
            }, {
                $set: {
                    User_Name: req.body.User_Name,
                    User_First_Name: req.body.First_Name,
                    User_Last_Name: req.body.Last_Name,
                    User_Gender: req.body.Gender,
                    User_Email: req.body.Email,
                    User_Number: req.body.number,
                    User_Password: Hash_Pass,
                    User_Birthday: req.body.birth
                }
            }, (err, company) => {
                if (err) return res.status(500).json({
                    msg: "Server Error :)",
                    err: err.msg
                })

                req.session.destroy(function(err) {
                    if (err) return res.status(500).send('Server Error :(')
                });

                res.send('ok')

            });
        });
    }

});
router.get('/LogOut', (req, res) => {

    req.session.destroy(function(err) {
        if (err) return res.status(500).send('Server Error :(')

    });
    res.redirect('/Login/LoginPage')

})
router.get('/Delete', (req, res) => {


    User_info.findOneAndDelete({ _id: req.session.user }, (err, info) => {
        if (err) return res.status(500).send("Something went wrong in delete Company! \n" + err);
        if (!info) return res.status(404).send("Company not found")
        req.session.destroy(function(err) {
            if (err) return res.status(500).send('Server Error :(')
        });
        res.redirect('/Login/LoginPage')
    })


})
module.exports = router