"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(orderID, customer) {
        this.orderID = orderID;
        this.customer = customer;
        this.totalPrice = 0;
    }
    Order.prototype.getCustomer = function () {
        return this.customer;
    };
    Order.prototype.addItem = function (itemOrder) {
        this.itemOrders = itemOrder;
    };
    Order.prototype.getItemOrder = function () {
        return this.itemOrders;
    };
    return Order;
}());
exports.Order = Order;
