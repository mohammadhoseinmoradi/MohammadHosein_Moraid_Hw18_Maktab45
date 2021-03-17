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
    // console.log(req.body);

    const bodyKeys = Object.keys(req.body);
    const checkFieldsResult = fieldsPattern.every((field) =>
        bodyKeys.includes(field)
    );
    // console.log(bodyKeys);
    if (!checkFieldsResult || bodyKeys.length !== 8) {
        console.log(111111);
        return res.status(400).send();
    }
    User_Info.findOne({ User_Name: req.body.User_Name.trim() }, (err, existUser) => {
        if (err) {
            return res.status(500).send();

        };
        if (existUser) {
            return res.status(400).send("User Name Already Exist.");
        };
        console.log("+++++++++++++++++++++++++++++++++++++++++++++");
        bcrypt.hash(req.body.User_Password, saltRounds, function(err, hash) {
            if (err) {
                return res.status(500).send();

            };
            console.log(hash);
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
            console.log(newUser);
            newUser.save({}, (err, doc) => {
                if (err) {
                    console.log(err);
                    if (err.code === 11000) {
                        console.log(2222222);
                        console.log(err);
                        return res.status(400).send("Duplicate item.");
                    }
                    console.log(4444444);
                    return res.status(500).send();
                }
                console.log(5555555);
                console.log(doc);
                req.session.user = doc
                res.send("ok")
                    // res.redirect("/Login/LoginPage")
            });
        });




    })




}
const LoginPage = (req, res) => {

}
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
            req.session.user = User;

            res.redirect('/Dashboard/dashboard');

        });
    })


}

module.exports = {
    Submit_User,
    GET_User,
    LoginPage
};