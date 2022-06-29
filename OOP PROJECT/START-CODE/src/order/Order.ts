
import { Customer } from "../human/customer/Customer";
import { Item } from "../menu/Item/Item";
import { ItemOrder } from "../menu/Item/ItemOrder";
import { PaymentStatus } from "./Payment";


export enum  OrderStatus{
    TODO = 'Todo',
    INPROGRESS = 'Inprogress',
    DONE = 'Done',
}
export class Order {
    private itemOrders: ItemOrder;
    private orderStatus: OrderStatus = OrderStatus.TODO;
    private paymentStatus: PaymentStatus = PaymentStatus.UNPAID;
    constructor(public orderID: number, private customer: Customer, public roomId: number, public tableID: number) {}

    getCustomer(): Customer{
        return this.customer;
    }

    addItem(itemOrder: ItemOrder){
        this.itemOrders = itemOrder;
    }
    
    getItemOrder(){
        return this.itemOrders;
    }

    updateStatus(status: OrderStatus){
        this.orderStatus = status;
    }

    updatePaymentStatus(status: PaymentStatus){
        this.paymentStatus = status;
    }

}

