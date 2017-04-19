"use strict";
var auth_guard_1 = require("../../auth/auth.guard");
var accounts_component_1 = require("./accounts.component");
exports.AccountsRoutes = [
    { path: 'accounts', component: accounts_component_1.AccountsComponent, canActivate: [auth_guard_1.AuthGuard] }
];
