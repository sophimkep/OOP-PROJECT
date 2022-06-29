"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Customer = void 0;
var Person_1 = require("../Person");
/**
 * A patient is a personn with some heath issues
 */
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, age, gender) {
        return _super.call(this, name, age, gender) || this;
    }
    Customer.prototype.payMent = function (status) {
        this.payment.updatePaymentStatus(status);
    };
    Customer.prototype.isEqual = function (other) {
        if (this.name === other.name && this.age === other.age && this.gender === other.gender) {
            return true;
        }
        return false;
    };
    return Customer;
}(Person_1.Person));
exports.Customer = Customer;
