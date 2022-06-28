import { Customer } from "../human/customer/Customer";
import { Item } from "../kitchen/Item/Item";

export class Order {
    private itemOrders: Item[] = [];

    constructor(private orderID: number, private customer: Customer) {}

    addItemToOrder(item: Item){
        this.itemOrders.push(item);
    }

    getItems(): Item[]{
        return this.itemOrders;
    }

    getCustomer(): Customer{
        return this.customer;
    }
}

