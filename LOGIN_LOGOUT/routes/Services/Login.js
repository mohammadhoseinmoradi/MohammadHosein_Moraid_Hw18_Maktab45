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



const GET_User = (req, res) => {
    User_Name = req.body.User_Name;
    User_Pass = req.body.User_Password
    console.log(User_Name, User_Pass);
    User_Info.find({ User_Name: User_Name }, (err, User) => {
        if (err) return res.status(500).send();
        console.log(User);
        bcrypt.compare(User_Pass, User[0].User_Password, function(err, result) {
            console.log(err);
            if (err) return res.status(500).send();
            console.log(result);

            res.json(User[0]._id)


        });
    })


}

module.exports = {

    GET_User,

};