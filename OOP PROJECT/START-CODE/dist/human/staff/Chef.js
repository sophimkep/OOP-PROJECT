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
exports.Chef = void 0;
var Order_1 = require("../../order/Order");
var Staff_1 = require("./Staff");
/**
 * A doctor is a staff with a mediacal speciality
 */
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(category, name, age, gender, salary) {
        var _this = _super.call(this, category, name, age, gender) || this;
        _this.salary = salary;
        return _this;
    }
    Chef.prototype.takeOrder = function (order) {
        Chef.order = order;
    };
    Chef.prototype.updateOrderStatus = function (status) {
        Chef.order.updateStatus(status);
    };
    Chef.prototype.isDone = function () {
        Chef.order.updateStatus(Order_1.OrderStatus.DONE);
    };
    Chef.cancelOrder = function (status) {
        Chef.order.updateStatus(status);
    };
    return Chef;
}(Staff_1.Staff));
exports.Chef = Chef;
