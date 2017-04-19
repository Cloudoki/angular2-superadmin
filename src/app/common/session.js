"use strict";
var Session = (function () {
    function Session(authService) {
        this.authService = authService;
        this.version = 1;
        this.authenticationtoken = null;
        this.user = {};
    }
    Session.prototype.loadEssentialData = function (callback) {
        this.user = {
            "id": 1,
            "fullname": "Koen Betsens",
            "firstname": "Koen",
            "lastname": "Betsens",
            "email": "koen@betsens.be",
            "avatar": "https:\/\/pbs.twimg.com\/profile_images\/460710408500695041\/eZGWaSPZ.png",
            "accounts": [
                { "id": 1,
                    "name": "Cloudoki"
                }
            ]
        };
        /*this.User = new User();

        this.User.once("activated", function () {
            callback();
        }.bind(this));

        this.User.fetch({error: this.authError.bind(this)});*/
    };
    // Error on API, for example
    Session.prototype.authError = function () {
        this.logout();
    };
    Session.prototype.logout = function () {
        this.authService.logout();
        this.authenticationtoken = null;
        localStorage.removeItem('token');
    };
    return Session;
}());
exports.Session = Session;
