"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(orderID, customer) {
        this.orderID = orderID;
        this.customer = customer;
        this.itemOrders = [];
    }
    Order.prototype.addItemToOrder = function (item) {
        this.itemOrders.push(item);
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
