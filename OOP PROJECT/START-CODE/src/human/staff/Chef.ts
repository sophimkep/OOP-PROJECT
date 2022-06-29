import { Order, OrderStatus } from "../../order/Order";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Chef extends Staff {
  static order: Order;
  protected salary: number;
  constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
    super(category, name, age, gender);
  }

  takeOrder(order: Order){
    Chef.order = order;
  }

  updateOrderStatus(status: OrderStatus){
    Chef.order.updateStatus(status);
  }

  isDone(){
    Chef.order.updateStatus(OrderStatus.DONE)
  }

  static cancelOrder(status: OrderStatus) {
    Chef.order.updateStatus(status);
  }
}
