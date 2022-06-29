import { DrinkCategory } from "./Drink";

export enum ItemType {
  DRINK = 'Drink',
  FOOD = 'Food',
}
export abstract class Item{
    constructor(protected title: string,protected price: number,protected category: ItemType) {}

    updatePrice(price: number){

    }

    getPrice(){
        return this.price;
    }

    getItemTitle(){
      return this.title;
    }
}