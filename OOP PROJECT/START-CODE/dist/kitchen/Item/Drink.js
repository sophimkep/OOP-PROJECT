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
exports.Drink = exports.DrinkCategory = void 0;
var Item_1 = require("./Item");
var DrinkCategory;
(function (DrinkCategory) {
    DrinkCategory["SOFTDRINK"] = "Softdrink";
    DrinkCategory["BEER"] = "Beer";
    DrinkCategory["COFFEE"] = "Coffee";
    DrinkCategory["TEA"] = "Tea";
})(DrinkCategory = exports.DrinkCategory || (exports.DrinkCategory = {}));
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink(title, price, category) {
        return _super.call(this, title, price, category) || this;
    }
    Drink.prototype.updatePrice = function (price) {
        this.price = price;
    };
    return Drink;
}(Item_1.Item));
exports.Drink = Drink;
