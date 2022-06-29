import { Room } from "./Room";

export class RoomManager {
  public rooms: Room[] = [];

  getNumberOfRooms(): number {
    return this.rooms.length;
  }

  addRoom(room: Room) {
    return this.rooms.push(room);
  }

  // /** Find a room with a free table
  //  * @return the all rooms are available with a free bed
  //  */

  findFreeRoom(){
    let freeRoom: Room[] = [];
    for(let room of this.rooms){
      if (room.findFreeTable()){
        freeRoom.push(room);
      }
    }
    if (freeRoom.length>0){
        return freeRoom;
    }else{
      return undefined;
    }
  }
}
