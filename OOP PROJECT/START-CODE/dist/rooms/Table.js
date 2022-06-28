"use strict";
exports.__esModule = true;
exports.Table = void 0;
var ChairStatus_1 = require("./ChairStatus");
var Table = /** @class */ (function () {
    function Table(id) {
        this.id = id;
        this.status = ChairStatus_1.ChairStatus.GOOD; // by default
        this.chairs = [];
    }
    Table.prototype.getNumberOfChairs = function () {
        return this.chairs.length;
    };
    Table.prototype.getChairs = function () {
        return this.chairs;
    };
    Table.prototype.addChair = function () {
        var chairs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chairs[_i] = arguments[_i];
        }
        if (this.chairs.length < 5) {
            this.chairs = this.chairs.concat(chairs);
        }
    };
    return Table;
}());
exports.Table = Table;
