
import { Order, OrderStatus } from "../../order/Order";
import { PaymentStatus } from "../../order/Payment";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Cashier extends Staff {
    static order: Order;
    protected salary: number
    constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
        super(category, name, age, gender);
    }  

    static addOrder(newOrder: Order){
        Cashier.order = newOrder;
    }
    receipt(){
        let total: number = 0;
        let list = "";
        let itemOrder = Cashier.order.getItemOrder();
        list += "Ord# " + Cashier.order.orderID+ "\n";
        list += "roomid# " + Cashier.order.roomId + "\n";
        list += "TableId#: " + Cashier.order.tableID + "\n";
        let items = itemOrder.getItems();
        for (let item of items){
            total += item.getPrice();
            list += item.getItemTitle() + ": " + item.getPrice()  + "\n";
        }
        return list + "Total: " + total;
    }

    getOrder(){
        return Cashier.order;
    }

    updatePaymentStatus(status: PaymentStatus){
        Cashier.order.updatePaymentStatus(status);
    }

}