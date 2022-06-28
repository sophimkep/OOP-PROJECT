import { HumanManager } from "./human/HumanManager";
import { MenuManager } from "./kitchen/MenuManager";
import { OrderManager } from "./order/OrderManager";
import { RoomManager } from "./rooms/RoomManager";



export class Restaurant {
  // Hospital attributes
  private name: string;
  private address: string;

  // public services
  public order: OrderManager = new OrderManager();
  public hr: HumanManager = new HumanManager();
  public menu: MenuManager = new MenuManager();
  public rooms: RoomManager = new RoomManager();
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}
