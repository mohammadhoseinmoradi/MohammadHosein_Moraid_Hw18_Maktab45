const express = require('express')
const router = express.Router()
const gneralTools = require('../../tools/gneraltTools')
const bcrypt = require('bcrypt')
const {
    GET_User,

} = require('../Services/Login')
    // !----------------------------------------------------------------
router.get('/LoginPage', gneralTools.sessionChecker, (req, res) => {
    res.render('auth/login')
})
router.post('/UserLogin', GET_User)



module.exports = router