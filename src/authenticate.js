"use strict"

module.exports = function (req, user, pass) {
    req.auth({user, pass});
};