const express = require('express')
const path = require('path')
const url = require('url')
const bcrypt = require('bcrypt')
const gneraltTools = require('../../tools/gneraltTools')
const User_Info = require(path.join(__dirname, "../../models/User"));
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';

const fieldsPattern = [
    "User_Name",
    "User_First_Name",
    "User_Last_Name",
    "User_Password",
    "User_Gender",
    "User_Birthday",
    "User_Email",
    "User_Number"
];


const Submit_User = (req, res) => {

    const bodyKeys = Object.keys(req.body);
    const checkFieldsResult = fieldsPattern.every((field) =>
        bodyKeys.includes(field)
    );

    if (!checkFieldsResult || bodyKeys.length !== 8) {
        return res.status(400).send();
    }
    User_Info.findOne({ User_Name: req.body.User_Name.trim() }, (err, existUser) => {
        if (err) {
            return res.status(500).send();
        };
        if (existUser) {
            return res.status(400).send("User Name Already Exist.");
        };

        bcrypt.hash(req.body.User_Password, saltRounds, function(err, hash) {
            if (err) {
                return res.status(500).send();

            };

            Hash_Pass = hash;
            const newUser = new User_Info({
                User_Name: req.body.User_Name,
                User_First_Name: req.body.User_First_Name,
                User_Last_Name: req.body.User_Last_Name,
                User_Password: Hash_Pass,
                User_Gender: req.body.User_Gender,
                User_Birthday: req.body.User_Birthday,
                User_Email: req.body.User_Email,
                User_Number: req.body.User_Number
            });

            newUser.save({}, (err, doc) => {
                if (err) {

                    if (err.code === 11000) {
                        console.log(2222222);

                        return res.status(400).send("Duplicate item.");
                    }

                    return res.status(500).send();
                }

                req.session.user = doc
                res.send("ok")

            });
        });




    })




}

const GET_User = (req, res) => {
    User_Name = req.body.User_Name;
    User_Pass = req.body.User_Password

    User_Info.find({ User_Name: User_Name }, (err, User) => {
        if (err) return res.status(500).send();

        bcrypt.compare(User_Pass, User[0].User_Password, function(err, result) {

            if (err) return res.status(500).send();

            req.session.user = User._id;

            res.redirect('/Dashboard/dashboard');

        });
    })


}

module.exports = {
    Submit_User,
    GET_User,

};