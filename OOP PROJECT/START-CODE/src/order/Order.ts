
import { Customer } from "../human/customer/Customer";
import { Item } from "../menu/Item/Item";
import { ItemOrder } from "../menu/Item/ItemOrder";

export class Order {
    private itemOrders: ItemOrder;
    private totalPrice: number = 0;

    constructor(private orderID: number, private customer: Customer, private roomId: number, private tableID: number) {}

    getCustomer(): Customer{
        return this.customer;
    }

    addItem(itemOrder: ItemOrder){
        this.itemOrders = itemOrder;
    }
    
    getItemOrder(){
        return this.itemOrders;
    }
}

