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
exports.Food = void 0;
var Item_1 = require("./Item");
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(title, price, category) {
        return _super.call(this, title, price, category) || this;
    }
    Food.prototype.updatePrice = function (price) {
        this.price = price;
    };
    return Food;
}(Item_1.Item));
exports.Food = Food;
