"use strict";
exports.__esModule = true;
exports.OrderManager = void 0;
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.orders = [];
    }
    OrderManager.prototype.addOrder = function () {
        var order = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            order[_i] = arguments[_i];
        }
        this.orders = this.orders.concat(order);
    };
    OrderManager.prototype.getOrders = function () {
        return this.orders;
    };
    return OrderManager;
}());
exports.OrderManager = OrderManager;
