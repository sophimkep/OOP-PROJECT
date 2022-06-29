import { DrinkCategory } from "./Drink";
import { FoodCategory } from "./Food";

export abstract class Item{
    getItems(): Item {
      throw new Error("Method not implemented.");
    }
    constructor(protected title: string,protected price: number,protected category: DrinkCategory | FoodCategory){}

    updatePrice(price: number){

    }

    getPrice(){
        return this.price;
    }
    getItemTitle(){
      return this.title;
    }
}