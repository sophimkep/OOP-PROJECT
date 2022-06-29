"use strict";
exports.__esModule = true;
exports.Order = exports.OrderStatus = void 0;
var Payment_1 = require("./Payment");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["TODO"] = "Todo";
    OrderStatus["INPROGRESS"] = "Inprogress";
    OrderStatus["DONE"] = "Done";
    OrderStatus["CANCEL"] = "Cancel";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var Order = /** @class */ (function () {
    function Order(orderID, customer, roomId, tableID) {
        this.orderID = orderID;
        this.customer = customer;
        this.roomId = roomId;
        this.tableID = tableID;
        this.orderStatus = OrderStatus.TODO;
        this.paymentStatus = Payment_1.PaymentStatus.UNPAID;
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
    Order.prototype.updateStatus = function (status) {
        this.orderStatus = status;
    };
    Order.prototype.updatePaymentStatus = function (status) {
        this.paymentStatus = status;
    };
    Order.prototype.getStatus = function () {
        return this.orderStatus;
    };
    Order.prototype.isEqual = function (other) {
        if (this.orderID == other.orderID &&
            this.orderStatus == other.orderStatus &&
            this.roomId == other.roomId && this.tableID == other.tableID) {
            return true;
        }
        else {
            return false;
        }
    };
    Order.prototype.getPaymentStatus = function () {
        return this.paymentStatus;
    };
    return Order;
}());
exports.Order = Order;
