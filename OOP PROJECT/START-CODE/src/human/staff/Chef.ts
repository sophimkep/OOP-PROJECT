import { Order } from "../../order/Order";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Chef extends Staff {
  private orders: Order;

  constructor(category: StaffCategory, name: string, age: number, gender: Gender, protected salary: number) {
    super(category, name, age, gender);
  }

  takeOrder(order: Order){
    this.orders = order;
  }

  getOrders(): Order{
    return this.orders
  }
}
