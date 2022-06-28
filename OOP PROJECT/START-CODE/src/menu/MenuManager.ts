import { Item } from "./Item/Item";

export class MenuManager{
    private items: Item[] = [];
    
    addItem(...items: Item[]){
        this.items = this.items.concat(items);
    }
}