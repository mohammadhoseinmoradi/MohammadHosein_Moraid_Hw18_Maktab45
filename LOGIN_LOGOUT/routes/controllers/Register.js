const express = require('express')
const router = express.Router()
const path = require('path')
const gneralTools = require('../../tools/gneraltTools')
const bcrypt = require('bcrypt')
const User_info = require('../../models/User')
const {
    Submit_User,
    GET_User,
    LoginPage
} = require('../Services/Registration')
    // !----------------------------------------------------------------
router.get('/public/javascripts/dashborad.js', (req, res) => {
    res.sendFile(path.join(__dirname, "/../../public/javascripts/dashborad.js"))
})
router.get('/public/stylesheets/dashbord.css', (req, res) => {
        res.sendFile(path.join(__dirname, "/../../public/stylesheets/dashbord.css"))
    })
    // todo=======================================================================================
router.get('/RegisterPage', gneralTools.sessionChecker, (req, res) => {
    res.render('auth/Register')
})
router.post('/Submit', Submit_User)
router.post('/getUser', GET_User)
router.get('/LoginPage', LoginPage)

module.exports = router