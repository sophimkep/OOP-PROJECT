"use strict";
exports.__esModule = true;
exports.Table = void 0;
var ChairStatus_1 = require("./ChairStatus");
var Table = /** @class */ (function () {
    function Table(id) {
        this.id = id;
        this.status = ChairStatus_1.ChairStatus.GOOD; // by default
        this.chairs = [];
        this.customers = [];
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
        else {
            return "Cannot add chair! Max 4";
        }
    };
    Table.prototype.findFreeChair = function () {
        for (var _i = 0, _a = this.chairs; _i < _a.length; _i++) {
            var chair = _a[_i];
            if (!chair.hasCustomer()) {
                return true;
            }
        }
        return false;
    };
    Table.prototype.addCustomerFromEachChairToTable = function () {
        var customer;
        for (var i = 0; i < this.chairs.length; i++) {
            if (this.chairs[i].hasCustomer()) {
                customer = this.chairs[i].getCustomer();
                this.customers.push(customer);
            }
        }
    };
    Table.prototype.getNumberCustomer = function () {
        return this.customers.length;
    };
    return Table;
}());
exports.Table = Table;
