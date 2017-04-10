"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./auth/login/login.component");
var menu_component_1 = require("./menu/menu.component");
var users_component_1 = require("./users/users.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var table_component_1 = require("./table/table.component");
var accounts_component_1 = require("./accounts/accounts.component");
var team_component_1 = require("./team/team.component");
var login_routes_1 = require("./auth/login/login.routes");
var app_routes_1 = require("./app.routes");
var primeng_1 = require("primeng/primeng");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.AppRoutingModule,
            // AUTH_PROVIDERS,
            http_1.HttpModule,
            forms_1.FormsModule,
            primeng_1.DataTableModule,
            primeng_1.SharedModule,
            primeng_1.DialogModule,
            primeng_1.ButtonModule,
            primeng_1.InputTextModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, menu_component_1.MenuComponent, users_component_1.UsersComponent, dashboard_component_1.DashboardComponent, table_component_1.TableComponent, accounts_component_1.AccountsComponent, team_component_1.TeamComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [login_routes_1.AUTH_PROVIDERS]
    })
], AppModule);
exports.AppModule = AppModule;
