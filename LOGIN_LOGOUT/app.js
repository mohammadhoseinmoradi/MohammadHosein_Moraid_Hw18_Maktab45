const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Config = require('./Config/Config')
const session = require('express-session')

const API = require('./routes/controllers/API')

const app = express();
//!--------------------------------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/public/javascripts/Register.js', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/javascripts/Register.js"))
})
app.get('/public/stylesheets/Rigester.css', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stylesheets/Rigester.css"))
})
app.get('/public/javascripts/login.js', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/javascripts/login.js"))
})
app.get('/public/stylesheets/login.css', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stylesheets/login.css"))
})
app.get('/public/javascripts/dashborad.js', (req, res) => {

    res.sendFile(path.join(__dirname, "/public/javascripts/dashborad.js"))
})
app.get('/public/stylesheets/dashbord.css', (req, res) => {

    res.sendFile(path.join(__dirname, "/public/stylesheets/dashbord.css"))
})

// ?----------s-------------------------------------------------DATABASE
const mongoose = require('mongoose');
mongoose.connect(Config.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// ?-----------------------------------------------------------view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ?----------------------------------------------------------ADD session

app.use(session({
    key: 'user_sid',
    secret: 'mysecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.cookies.user_sid);
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid')
    };
    next();
});


// ?------------------------------------------------------------ROUTER
app.use('/', API)



// ?-----------------------------------------------------------ERROR OR CATCH
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;