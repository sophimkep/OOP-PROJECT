import { Item, ItemType } from "./Item";

export class Food extends Item {
    constructor(title: string, price:number, category: ItemType){
        super(title,price, category)
    }

    updatePrice(price: number){
        this.price = price;
    }

}