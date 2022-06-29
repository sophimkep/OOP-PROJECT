import { Customer } from "./customer/Customer";
import { Staff, StaffCategory } from "./staff/Staff";

export class HumanManager {
  private customers: Customer[] = [];
  private staffs: Staff[] = [];


  // adddCustomer(customer: Customer){
  //   this.customers.push(customer);
  // }

  getcustomers() {
    return this.customers;
  }

  addStaff(staff: Staff) {
    this.staffs.push(staff);
  }

  getStaffs() {
    return this.staffs;
  }



}
