const express = require('express')
const router = express.Router()
const gneralTools = require('../../tools/gneraltTools')

const {
    Submit_User,
    GET_User,

} = require('../Services/Registration')
    // !----------------------------------------------------------------

// todo=======================================================================================
router.get('/RegisterPage', gneralTools.sessionChecker, (req, res) => {
    res.render('auth/Register')
})
router.post('/Submit', Submit_User)
router.post('/getUser', GET_User)


module.exports = router