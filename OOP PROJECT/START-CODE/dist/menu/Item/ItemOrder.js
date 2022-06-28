"use strict";
exports.__esModule = true;
exports.ItemOrder = void 0;
var ItemOrder = /** @class */ (function () {
    function ItemOrder() {
        this.items = [];
    }
    ItemOrder.prototype.addItemToOrder = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.items = this.items.concat(items);
    };
    ItemOrder.prototype.getItems = function () {
        return this.items;
    };
    return ItemOrder;
}());
exports.ItemOrder = ItemOrder;
