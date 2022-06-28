"use strict";
exports.__esModule = true;
exports.Room = void 0;
/**
 * A room is composed of many tables
 */
var Room = /** @class */ (function () {
    function Room(id) {
        this.id = id;
        this.tables = [];
    }
    Room.prototype.getNumberOfTables = function () {
        return this.tables.length;
    };
    Room.prototype.getTables = function () {
        return this.tables;
    };
    Room.prototype.addTable = function () {
        var table = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            table[_i] = arguments[_i];
        }
        this.tables = this.tables.concat(table);
    };
    return Room;
}());
exports.Room = Room;
