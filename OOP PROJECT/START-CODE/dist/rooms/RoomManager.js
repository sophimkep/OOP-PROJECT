"use strict";
exports.__esModule = true;
exports.RoomManager = void 0;
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.rooms = [];
    }
    RoomManager.prototype.getNumberOfRooms = function () {
        return this.rooms.length;
    };
    RoomManager.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    // /** Find a room with a free bed
    //  * @return the first room available with a free bed
    //  */
    RoomManager.prototype.findFreeRoom = function () {
        var freeRoom = [];
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.findFreeTable()) {
                freeRoom.push(room);
            }
        }
        if (freeRoom.length > 0) {
            return freeRoom;
        }
        else {
            return undefined;
        }
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
