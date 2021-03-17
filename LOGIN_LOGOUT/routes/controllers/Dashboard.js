const express = require('express')
const router = express.Router()
const gneralTools = require('../../tools/gneraltTools')
const User_info = require('../../models/User')


router.get('/dashboard/:id', (req, res) => {
    console.log(req.session);
    console.log(req.params.id);
    User_info.find({ _id: req.params.id }, (err, user) => {
        if (err) return res.status(500).send();
        console.log(user);
        res.render('dashboard', { user })
    })
    console.log(req.params.id);


});

module.exports = router