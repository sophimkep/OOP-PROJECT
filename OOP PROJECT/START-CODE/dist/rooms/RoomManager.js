"use strict";
exports.__esModule = true;
exports.RoomManager = void 0;
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.rooms = [];
        // /** Find a room with a free bed
        //  * @return the first room available with a free bed
        //  */
        // findFreeRoom(): Room | undefined {
        //  let result:any;
        //  let freeRoom: Room[] = [];
        //   for(let room of this.rooms){
        //     for(let table of room.addTable()){
        //       if(table.hasPatient()){
        //         result='undefined';
        //       }else{
        //         freeRoom.push(room);
        //         result = freeRoom;
        //       }
        //     };
        //   };
        //   return result;
        // }
    }
    RoomManager.prototype.getNumberOfRooms = function () {
        return this.rooms.length;
    };
    RoomManager.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
