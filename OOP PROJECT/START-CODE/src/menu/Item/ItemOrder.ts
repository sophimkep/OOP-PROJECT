import { Item } from "./Item";

export class ItemOrder{
    private items: Item[] = [];

    addItemToOrder(...items: Item[]){
        this.items = this.items.concat(items);
    }

    getItems(){
        return this.items
    }
}