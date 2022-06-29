import { Order, OrderStatus } from "../../order/Order";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Chef extends Staff {
  private order: Order;

  constructor(category: StaffCategory, name: string, age: number, gender: Gender, protected salary: number) {
    super(category, name, age, gender);
  }

  takeOrder(order: Order){
    this.order = order;
  }

  updateOrderStatus(status: OrderStatus){
    this.order.updateStatus(status);
  }

  isDone(){
    this.order.updateStatus(OrderStatus.DONE)
  }
}
