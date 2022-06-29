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
        if (this.tables.length < 5) {
            this.tables = this.tables.concat(table);
        }
        else {
            return "Cannot add table! Max 4";
        }
    };
    Room.prototype.findFreeTable = function () {
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            if (table.getCustomer().length <= 0) {
                return true;
            }
        }
        return false;
    };
    return Room;
}());
exports.Room = Room;
