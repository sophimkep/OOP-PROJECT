import { Item } from "./Item";

export enum DrinkCategory{
    SOFTDRINK = 'Softdrink',
    BEER = 'Beer',
    COFFEE = 'Coffee',
    TEA = 'Tea',
}
export class Drink extends Item{
    constructor(title: string,price: number, category: DrinkCategory){
        super(title,price, category)
    }

    updatePrice(price: number){
        this.price = price;
    }
}