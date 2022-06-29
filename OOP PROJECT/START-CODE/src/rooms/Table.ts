
import { Customer } from "../human/customer/Customer";
import { Chair } from "./Chair";
import { ChairStatus } from "./ChairStatus";

export class Table {
  private status = ChairStatus.GOOD; // by default
  public chairs: Chair[] = [];
  private customers: Customer[] = [];


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
    }else{
      return "Cannot add chair! Max 4";
    }
  }

  findFreeChair() {
    for(let chair of this.chairs){
      if (!chair.hasCustomer()){
        return true;
      }
    }
    return false;
  }

  addCustomerToChairs(customer: Customer){
    for (let i=0;i<this.chairs.length;i++){
      if (this.chairs[i].getCustomer()?.isEqual(customer)){
        
      }
    }
  }

  getNumberCustomer() {
    return this.customers.length;
  }
}
