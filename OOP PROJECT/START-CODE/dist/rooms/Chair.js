"use strict";
exports.__esModule = true;
exports.Chair = void 0;
var ChairStatus_1 = require("./ChairStatus");
var Chair = /** @class */ (function () {
    function Chair() {
        this.status = ChairStatus_1.ChairStatus.GOOD; // by default
        this.customer = undefined; // not customer in chair
    }
    // CHAIR CUSTOMER ----------------------------------------------
    Chair.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    Chair.prototype.hasCustomer = function () {
        return this.customer !== undefined;
    };
    Chair.prototype.getCustomer = function () {
        return this.customer;
    };
    // CHAIR STATUS  ----------------------------------------------
    Chair.prototype.getStatus = function () {
        return this.status;
    };
    Chair.prototype.setStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Chair;
}());
exports.Chair = Chair;
