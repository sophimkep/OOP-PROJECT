"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
    Item.prototype.getItems = function () {
        throw new Error("Method not implemented.");
    };
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
