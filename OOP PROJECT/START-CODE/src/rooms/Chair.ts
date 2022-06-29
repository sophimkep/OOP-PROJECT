import { Customer } from "../human/customer/customer";
import { ChairStatus } from "./ChairStatus";

export class Chair {
  private status = ChairStatus.GOOD; // by default
  private customer?: Customer = undefined; // not customer in chair

  // CHAIR CUSTOMER ----------------------------------------------
  setCustomer(newcustomer: Customer) {
    this.customer = newcustomer;
  }

  hasCustomer(){
    return this.customer !== undefined;
  }

  getCustomer() {
    return this.customer;
  }

  // CHAIR STATUS  ----------------------------------------------
  getStatus() {
    return this.status;
  }

  setStatus(newStatus: ChairStatus) {
    this.status = newStatus;
  }

  
}
