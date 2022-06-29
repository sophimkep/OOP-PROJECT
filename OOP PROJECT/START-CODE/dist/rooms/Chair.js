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
    Chair.prototype.setCustomer = function (newcustomer) {
        var _a;
        if (!((_a = this.customer) === null || _a === void 0 ? void 0 : _a.isEqual(newcustomer))) {
            this.customer = newcustomer;
        }
        else {
            return "Customer already exists";
        }
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
