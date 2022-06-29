import { Order } from "./Order";

export enum PaymentStatus {
    PAID = 'Paid',
    UNPAID = 'Unpaid',
}
export class Payment{
    private order: Order;


    updatePaymentStatus(status: PaymentStatus){
        this.order.updatePaymentStatus(status);
      }
}