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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var TableService = (function () {
    function TableService(http) {
        this.http = http;
        this.url = 'http://dummydata.cloudoki.com/superadmin/';
    }
    TableService.prototype.getData = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TableService.prototype.deleteRow = function (userId) {
        return this.http.delete(this.url + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TableService.prototype.createRow = function (user) {
        return this.http.post(this.url, user)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TableService.prototype.updateRow = function (user) {
        return this.http.put(this.url, user)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TableService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TableService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return TableService;
}());
TableService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TableService);
exports.TableService = TableService;
