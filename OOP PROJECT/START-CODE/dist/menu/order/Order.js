"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(orderID, customer) {
        this.orderID = orderID;
        this.customer = customer;
        this.itemOrders = [];
        this.totalPrice = 0;
    }
    Order.prototype.addItemToOrder = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.itemOrders = this.itemOrders.concat(items);
    };
    Order.prototype.getItems = function () {
        return this.itemOrders;
    };
    Order.prototype.getCustomer = function () {
        return this.customer;
    };
    return Order;
}());
exports.Order = Order;
