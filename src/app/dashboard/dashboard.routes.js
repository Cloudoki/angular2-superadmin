"use strict";
var auth_guard_1 = require("../auth/auth.guard");
var dashboard_component_1 = require("./dashboard.component");
exports.DashboardRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] }
];
