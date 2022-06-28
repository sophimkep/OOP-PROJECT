import { Item } from "../../menu/Item/Item";
import { ItemOrder } from "../../menu/Item/ItemOrder";
import { Order } from "../../order/Order";
import { Customer } from "../customer/Customer";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Waiter extends Staff {
  private order: Order;
  constructor(category: StaffCategory, name: string, age: number, gender: Gender, protected salary: number) {
    super(category, name, age, gender);
  }

  createOrder(id:number, customer: Customer, customerOrder: ItemOrder, roomId: number, tableId: number){
    let newOrder = new Order(id, customer, roomId, tableId);
    newOrder.addItem(customerOrder)
    this.order = newOrder;
  }

  getOrder(){
    return this.order;
  }
}

