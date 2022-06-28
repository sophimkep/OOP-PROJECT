
import { Order } from "../../order/Order";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Cashier extends Staff {
    private totalPrice: number = 0;
    private order: Order;
    constructor(category: StaffCategory, name: string, age: number, gender: Gender, protected salary: number) {
        super(category, name, age, gender);
    }  

    addOrder(order: Order){
        this.order = order;
    }
    
    calculateTotalPrice(){
        let items = this.order.getItems();
        for (let item of items) {
            this.totalPrice += item.getPrice();
        }
    }
}