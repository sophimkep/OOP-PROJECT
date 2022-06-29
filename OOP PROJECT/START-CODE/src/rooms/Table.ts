
import { Customer } from "../human/customer/Customer";
import { TableStatus } from "./TableStatus";

export class Table {
  private status = TableStatus.GOOD; // by default
  private customers: Customer[] = [];
  constructor(private id: number, private numberOfChair: number) {}

  addCustomer(customer: Customer): string {
    let message: string = '';
    if (this.customers.length < this.numberOfChair){
      if (this.isCustomerExists(customer)){
        this.customers.push(customer);
      }else{
        message = "Customer already added";
      }
    }else{
      message = "Cannot add more customers";
    }
    return message;
  }

  isCustomerExists(customer: Customer){
    for (let i = 0; i < this.customers.length; i++){
      if (this.customers[i].isEqual(customer)){
        return false;
      }else{
        return true;
      }
    }
  }

  getCustomer() {
    return this.customers;
  }
  getNumberOfChair() {
    return this.numberOfChair;
  }

  removeCustomer(){
    this.customers = [];
  }



}
