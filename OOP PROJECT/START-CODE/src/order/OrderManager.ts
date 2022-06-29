import { Order, OrderStatus } from "./Order";

export class OrderManager {
    private orders: Order[] = [];

    addOrder(order: Order){
        this.orders.push(order);
    }
    getOrders(): Order[]{
        return this.orders;
    }

    removeOrder(){
        for (let i=0; i<this.orders.length; i++) {
            if (this.orders[i].getStatus()== OrderStatus.CANCEL){
                this.orders.splice(i,1);
            }
        }
    }

    removeSpecificOrder(order: Order){
        for (let i=0; i<this.orders.length; i++) {
            if (this.orders[i].isEqual(order)){
                this.orders.splice(i,1);
            }
        }
    }
}