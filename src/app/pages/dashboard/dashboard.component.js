"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var dashboard_service_1 = require("../../services/dashboard.service");
var users_service_1 = require("../../services/users.service");
var DashboardComponent = (function () {
    function DashboardComponent(_service, _userservice) {
        var _this = this;
        this.componentName = 'DashboardComponent';
        this.panels = [];
        this.users = [];
        this.error = false;
        _service.getData().subscribe(function (data) { _this.panels = data; }, function (err) { _this.error = true; });
        _userservice.getData().subscribe(function (data) { _this.users = data; }, function (err) { _this.error = true; });
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        providers: [dashboard_service_1.DashboardService, users_service_1.UsersService],
        template: require('./dashboard.component.html'),
        styles: [require('./dashboard.component.scss').toString()]
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService, users_service_1.UsersService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
