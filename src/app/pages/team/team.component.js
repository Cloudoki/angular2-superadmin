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
var team_service_1 = require("../../services/team.service");
var TeamComponent = (function () {
    function TeamComponent(_service) {
        var _this = this;
        this.componentName = 'TeamComponent';
        this.team = [];
        this.error = false;
        _service.getData().subscribe(function (data) { _this.team = data; }, function (err) { _this.error = true; });
    }
    return TeamComponent;
}());
TeamComponent = __decorate([
    core_1.Component({
        selector: 'app-team',
        providers: [team_service_1.TeamService],
        template: require('./team.component.html'),
        styles: [require('./team.component.scss').toString()]
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamComponent);
exports.TeamComponent = TeamComponent;
