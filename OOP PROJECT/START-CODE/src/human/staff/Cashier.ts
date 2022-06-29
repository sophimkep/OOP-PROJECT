
import { Order } from "../../order/Order";
import { Customer } from "../customer/Customer";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Cashier extends Staff {
    private order: Order;
    constructor(category: StaffCategory, name: string, age: number, gender: Gender, protected salary: number) {
        super(category, name, age, gender);
    }  

    receipt(order: Order){
        let total: number = 0;
        let list = "";
        let itemOrder = order.getItemOrder();
        list += "Ord# " + order.orderID+ "\n";
        list += "roomid# " + order.roomId + "\n";
        list += "TableId#: " + order.tableID + "\n";
        let items = itemOrder.getItems();
        for (let item of items){
            total += item.getPrice();
            list += item.getItemTitle() + ": " + item.getPrice()  + "\n";
        }
        return list + "Total: " + total;
    }

}