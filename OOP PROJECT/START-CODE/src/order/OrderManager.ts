import { Order } from "./Order";

export class OrderManager {
    private orders: Order[] = [];

    addOrder(...order: Order[]){
        this.orders = this.orders.concat(order);
    }
    getOrders(): Order[]{
        return this.orders
    }
}