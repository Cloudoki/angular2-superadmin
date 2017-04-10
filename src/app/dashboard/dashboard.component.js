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
var dashboard_service_1 = require("./dashboard.service");
var users_service_1 = require("../users/users.service");
// import { User } from '../users/user';
var DashboardComponent = (function () {
    //  *******************************************************************************
    // displayDialog: boolean;
    // user: User = new User();
    // // car: Car = new PrimeCar();
    // selectedUser: User;
    // newUser: boolean;
    // // cars: Car[];
    // settings = [
    //     {field: 'id', header: 'ID'},
    //     {field: 'name', header: 'Name'},
    //     {field: 'email', header: 'Email'},
    //     {field: 'phone', header: 'Phone'}
    // ];
    // showDialogToAdd() {
    //   this.newUser = true;
    //   this.user = new User();
    //   this.displayDialog = true;
    // }
    //
    // save() {
    //     if(this.newUser)
    //         this.users.push(this.user);
    //     else
    //         this.users[this.findSelectedUserIndex()] = this.user;
    //
    //     this.user = null;
    //     this.displayDialog = false;
    // }
    //
    // delete() {
    //     this.users.splice(this.findSelectedUserIndex(), 1);
    //     this.user = null;
    //     this.displayDialog = false;
    // }
    //
    // onRowSelect(event) {
    //     this.newUser = false;
    //     this.user = this.cloneUser(event.data);
    //     this.displayDialog = true;
    // }
    //
    // cloneUser(u: User): User {
    //     let user = new User();
    //     for(let prop in u) {
    //         user[prop] = u[prop];
    //     }
    //     return user;
    // }
    //
    // findSelectedUserIndex(): number {
    //     return this.users.indexOf(this.selectedUser);
    // }
    //  *******************************************************************************
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
        // directives: [MenuComponent],
        template: require('./dashboard.component.html'),
        styles: [require('./dashboard.component.scss').toString()]
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService, users_service_1.UsersService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
