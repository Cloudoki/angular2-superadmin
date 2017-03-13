"use strict";
var router_1 = require("@angular/router");
var login_routes_1 = require("./auth/login/login.routes");
var dashboard_routes_1 = require("./dashboard/dashboard.routes");
var users_routes_1 = require("./users/users.routes");
exports.routes = dashboard_routes_1.DashboardRoutes.concat(login_routes_1.LoginRoutes, users_routes_1.UsersRoutes);
exports.AppRoutingModule = router_1.RouterModule.forRoot(exports.routes);
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes),
//   AUTH_PROVIDERS
// ];
