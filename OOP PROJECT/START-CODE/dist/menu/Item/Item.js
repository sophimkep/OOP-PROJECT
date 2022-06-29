"use strict";
exports.__esModule = true;
exports.Item = exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType["DRINK"] = "Drink";
    ItemType["FOOD"] = "Food";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var Item = /** @class */ (function () {
    function Item(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
    Item.prototype.updatePrice = function (price) {
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getItemTitle = function () {
        return this.title;
    };
    return Item;
}());
exports.Item = Item;
