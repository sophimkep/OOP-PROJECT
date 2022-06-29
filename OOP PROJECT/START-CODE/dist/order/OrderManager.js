"use strict";
exports.__esModule = true;
exports.OrderManager = void 0;
var Order_1 = require("./Order");
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.orders = [];
    }
    OrderManager.prototype.addOrder = function (order) {
        this.orders.push(order);
    };
    OrderManager.prototype.getOrders = function () {
        return this.orders;
    };
    OrderManager.prototype.removeOrder = function () {
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].getStatus() == Order_1.OrderStatus.CANCEL) {
                this.orders.splice(i, 1);
            }
        }
    };
    OrderManager.prototype.removeSpecificOrder = function (order) {
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].isEqual(order)) {
                this.orders.splice(i, 1);
            }
        }
    };
    return OrderManager;
}());
exports.OrderManager = OrderManager;
