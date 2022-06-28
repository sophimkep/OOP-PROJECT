import { DrinkCategory } from "./Drink";
import { FoodCategory } from "./Food";

export abstract class Item{
    constructor(protected title: string,protected price: number,protected category: DrinkCategory | FoodCategory){}

    updatePrice(price: number){

    }

    getPrice(){
        return this.price;
    }
}