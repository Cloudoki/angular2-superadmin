"use strict";
var auth_guard_1 = require("../auth/auth.guard");
var team_component_1 = require("./team.component");
exports.TeamRoutes = [
    { path: 'team', component: team_component_1.TeamComponent, canActivate: [auth_guard_1.AuthGuard] }
];
