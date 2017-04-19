"use strict";
var Account = (function () {
    function Account(type, name, slug, active, users) {
        this.type = type;
        this.name = name;
        this.slug = slug;
        this.active = active;
        this.users = users;
        this.id = new Date().getTime();
        this.type = '';
        this.name = '';
        this.slug = '';
        this.active = 0;
        this.users = [];
    }
    return Account;
}());
exports.Account = Account;
