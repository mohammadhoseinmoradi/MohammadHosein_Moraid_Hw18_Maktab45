const url = require('url');
const generalTools = {};

generalTools.sessionChecker = function(req, res, next) {
    console.log("===========================================================");
    console.log(req.cookies.user_sid, req.session.user);
    if (req.cookies.user_sid && req.session.user) {
        return res.redirect(`/Dashboard/dashboard/${req.session.user._id}`)
    };

    return next()
};

generalTools.loginChecker = function(req, res, next) {
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
    console.log(req.session.user);
    if (!req.session.user) {
        return res.redirect(url.format({
            pathname: "/Login/LoginPage",

        }));
    };

    return next()
};



module.exports = generalTools;