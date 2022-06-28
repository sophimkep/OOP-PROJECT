import { Item } from "./Item";

export enum FoodCategory{
    SPAGHETTI = 'Spaghetti',
    BURGER = 'Burger',
    SANWICH = 'SanwICH',
}
export class Food extends Item {
    constructor(title: string,price:number, category: FoodCategory){
        super(title,price, category)
    }

    updatePrice(price: number){
        this.price = price;
    }

}