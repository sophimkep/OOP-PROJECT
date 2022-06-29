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
exports.Cashier = void 0;
var Staff_1 = require("./Staff");
var Cashier = /** @class */ (function (_super) {
    __extends(Cashier, _super);
    function Cashier(category, name, age, gender, salary) {
        var _this = _super.call(this, category, name, age, gender) || this;
        _this.salary = salary;
        return _this;
    }
    Cashier.prototype.receipt = function (order) {
        var total = 0;
        var list = "";
        var itemOrder = order.getItemOrder();
        list += "Ord# " + order.orderID + "\n";
        list += "roomid# " + order.roomId + "\n";
        list += "TableId#: " + order.tableID + "\n";
        var items = itemOrder.getItems();
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            total += item.getPrice();
            list += item.getItemTitle() + ": " + item.getPrice() + "\n";
        }
        return list + "Total: " + total;
    };
    return Cashier;
}(Staff_1.Staff));
exports.Cashier = Cashier;
