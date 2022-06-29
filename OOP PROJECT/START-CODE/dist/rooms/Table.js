"use strict";
exports.__esModule = true;
exports.Table = void 0;
var TableStatus_1 = require("./TableStatus");
var Table = /** @class */ (function () {
    function Table(id, numberOfChair) {
        this.id = id;
        this.numberOfChair = numberOfChair;
        this.status = TableStatus_1.TableStatus.GOOD; // by default
        this.customers = [];
    }
    Table.prototype.addCustomer = function (customer) {
        var message = '';
        if (this.customers.length < this.numberOfChair) {
            if (this.isAreadyAddCustomer(customer)) {
                this.customers.push(customer);
            }
            else {
                message = "Customer already added";
            }
        }
        else {
            message = "Cannot add more customers";
        }
        return message;
    };
    Table.prototype.isAreadyAddCustomer = function (customer) {
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].isEqual(customer)) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    Table.prototype.getCustomer = function () {
        return this.customers;
    };
    Table.prototype.getNumberOfChair = function () {
        return this.numberOfChair;
    };
    Table.prototype.removeCustomer = function () {
        this.customers = [];
    };
    return Table;
}());
exports.Table = Table;
