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
exports.Waiter = void 0;
var Order_1 = require("../../order/Order");
var Cashier_1 = require("./Cashier");
var Staff_1 = require("./Staff");
/**
 * A nurse manage patient checks
 */
var Waiter = /** @class */ (function (_super) {
    __extends(Waiter, _super);
    function Waiter(category, name, age, gender, salary) {
        var _this = _super.call(this, category, name, age, gender) || this;
        _this.salary = salary;
        return _this;
    }
    Waiter.prototype.createOrder = function (id, customer, customerOrder, roomId, tableId) {
        var newOrder = new Order_1.Order(id, customer, roomId, tableId);
        newOrder.addItem(customerOrder);
        Cashier_1.Cashier.addOrder(newOrder);
    };
    return Waiter;
}(Staff_1.Staff));
exports.Waiter = Waiter;
