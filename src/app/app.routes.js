"use strict";
var router_1 = require("@angular/router");
var login_routes_1 = require("./auth/login/login.routes");
var dashboard_routes_1 = require("./pages/dashboard/dashboard.routes");
var users_routes_1 = require("./pages/users/users.routes");
var accounts_routes_1 = require("./pages/accounts/accounts.routes");
var team_routes_1 = require("./pages/team/team.routes");
exports.routes = dashboard_routes_1.DashboardRoutes.concat(login_routes_1.LoginRoutes, users_routes_1.UsersRoutes, accounts_routes_1.AccountsRoutes, team_routes_1.TeamRoutes);
exports.AppRoutingModule = router_1.RouterModule.forRoot(exports.routes);
