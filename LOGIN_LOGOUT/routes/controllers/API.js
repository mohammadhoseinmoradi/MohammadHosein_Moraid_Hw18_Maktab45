const express = require('express')
const path = require('path')
const router = express.Router()
const Register = require('../controllers/Register')
const Login = require('../controllers/Login')
const Dashboard = require('../controllers/Dashboard')
const generalTools = require('../../tools/gneraltTools')

// !------------------------------------------------------------------------------


router.use('/User', Register)
router.use('/Login', Login)
router.use('/Dashboard', generalTools.loginChecker, Dashboard)
module.exports = router