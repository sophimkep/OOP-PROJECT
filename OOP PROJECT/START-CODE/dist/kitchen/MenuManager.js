"use strict";
exports.__esModule = true;
exports.MenuManager = void 0;
var MenuManager = /** @class */ (function () {
    function MenuManager() {
        this.items = [];
    }
    MenuManager.prototype.addItem = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.items = this.items.concat(items);
    };
    return MenuManager;
}());
exports.MenuManager = MenuManager;
