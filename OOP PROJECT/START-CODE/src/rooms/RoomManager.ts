import { Room } from "./Room";

export class RoomManager {
  public rooms: Room[] = [];

  getNumberOfRooms(): number {
    return this.rooms.length;
  }

  addRoom(room: Room) {
    return this.rooms.push(room);
  }

  // /** Find a room with a free bed
  //  * @return the first room available with a free bed
  //  */

  findFreeRoom(): Room[] | undefined{
    var freeRoom: Room[] = [];
    for(let room of this.rooms){
      if(room.isTableFree()){
        freeRoom.push(room);
      }
    }
    if (freeRoom.length > 0){
      return freeRoom;
    }else{
      return undefined;
    }
  }
}
