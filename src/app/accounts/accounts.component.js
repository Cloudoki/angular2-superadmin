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
var accounts_service_1 = require("./accounts.service");
var AccountsComponent = (function () {
    function AccountsComponent(_service) {
        var _this = this;
        this.componentName = 'AccountsComponent';
        this.accounts = [];
        this.error = false;
        this.settings = [
            { field: 'id', header: 'ID' },
            { field: 'slug', header: 'Unique Name' },
            { field: 'name', header: 'Name' },
            { field: 'users', header: 'Users' },
            { field: 'active', header: 'Active' }
        ];
        _service.getData().subscribe(function (data) { _this.accounts = data; }, function (err) { _this.error = true; });
    }
    return AccountsComponent;
}());
AccountsComponent = __decorate([
    core_1.Component({
        selector: 'app-accounts',
        providers: [accounts_service_1.AccountsService],
        template: require('./accounts.component.html'),
        styles: [require('./accounts.component.scss').toString()]
    }),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], AccountsComponent);
exports.AccountsComponent = AccountsComponent;
