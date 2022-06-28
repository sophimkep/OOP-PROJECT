"use strict";
exports.__esModule = true;
exports.RoomsManager = void 0;
var RoomsManager = /** @class */ (function () {
    function RoomsManager() {
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
    RoomsManager.prototype.getNumberOfRooms = function () {
        return this.rooms.length;
    };
    RoomsManager.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
