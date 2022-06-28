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
