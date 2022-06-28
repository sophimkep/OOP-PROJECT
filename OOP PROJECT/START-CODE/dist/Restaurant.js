"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var HumanManager_1 = require("./human/HumanManager");
var MenuManager_1 = require("./menu/MenuManager");
var OrderManager_1 = require("./order/OrderManager");
var RoomManager_1 = require("./rooms/RoomManager");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        // public services
        this.orders = new OrderManager_1.OrderManager();
        this.hr = new HumanManager_1.HumanManager();
        this.menu = new MenuManager_1.MenuManager();
        this.rooms = new RoomManager_1.RoomManager();
        this.name = name;
        this.address = address;
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant;
