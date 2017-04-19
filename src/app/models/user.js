"use strict";
var User = (function () {
    function User(fullname, firstname, lastname, email, avatar, accounts) {
        this.fullname = fullname;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.avatar = avatar;
        this.accounts = accounts;
        this.id;
        this.fullname = '';
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.avatar = '';
        this.accounts = [];
    }
    return User;
}());
exports.User = User;
