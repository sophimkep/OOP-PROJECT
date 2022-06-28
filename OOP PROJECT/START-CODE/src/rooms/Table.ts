
import { Chair } from "./Chair";
import { ChairStatus } from "./ChairStatus";

export class Table {
  private status = ChairStatus.GOOD; // by default
  public chairs: Chair[] = [];


  constructor(private id: number) {}

  getNumberOfChairs() {
    return this.chairs.length;
  }

  getChairs() {
    return this.chairs;
  }

  addChair(...chairs: Chair[]) {
    if (this.chairs.length < 5){
      this.chairs = this.chairs.concat(chairs);
    }
  }
}
