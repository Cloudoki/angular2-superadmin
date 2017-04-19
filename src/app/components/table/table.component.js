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
var user_1 = require("../../models/user");
var account_1 = require("../../models/account");
var table_service_1 = require("../../services/table.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var TableComponent = (function () {
    function TableComponent(tableService) {
        this.tableService = tableService;
        this.componentName = 'TableComponent';
        this.settings = {};
        this.element = {};
    }
    TableComponent.prototype.ngOnInit = function () {
        this.modalHeader = this.type + ' Details';
        switch (this.type) {
            case 'User':
                this.elementClass = user_1.User;
                break;
            case 'Account':
                this.elementClass = account_1.Account;
                break;
        }
    };
    TableComponent.prototype.showDialogToAdd = function () {
        this.newElement = true;
        this.element = new this.elementClass();
        this.displayDialog = true;
    };
    TableComponent.prototype.save = function (item) {
        var _this = this;
        if (this.newElement) {
            this.tableService.createRow(this.element).subscribe(function (data) {
                _this.elements.push(data);
                return true;
            }, function (error) {
                console.error("Error creating row!");
                return Observable_1.Observable.throw(error);
            });
        }
        else {
            this.elements[this.findSelectedElementIndex()] = this.element;
            this.tableService.updateRow(item).subscribe(function (data) {
                console.log("update", data);
                return true;
            }, function (error) {
                console.error("Error editing row!");
                return Observable_1.Observable.throw(error);
            });
        }
        this.element = null;
        this.displayDialog = false;
    };
    TableComponent.prototype.delete = function (id) {
        this.elements.splice(this.findSelectedElementIndex(), 1);
        this.element = null;
        this.displayDialog = false;
        this.tableService.deleteRow(id).subscribe(function (data) {
            console.log("delete", data);
            return true;
        }, function (error) {
            console.error("Error deleting row!");
            return Observable_1.Observable.throw(error);
        });
    };
    TableComponent.prototype.onRowSelect = function (event) {
        this.newElement = false;
        this.element = this.cloneElement(event.data);
        console.log(this.element);
        this.displayDialog = true;
    };
    TableComponent.prototype.cloneElement = function (u) {
        var element = new this.elementClass();
        for (var prop in u) {
            element[prop] = u[prop];
        }
        return element;
    };
    TableComponent.prototype.findSelectedElementIndex = function () {
        return this.elements.indexOf(this.selectedElement);
    };
    return TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "elements", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "settings", void 0);
TableComponent = __decorate([
    core_1.Component({
        selector: 'app-table',
        providers: [table_service_1.TableService],
        template: require('./table.component.html'),
        styles: [require('./table.component.scss').toString()]
    }),
    __metadata("design:paramtypes", [table_service_1.TableService])
], TableComponent);
exports.TableComponent = TableComponent;
