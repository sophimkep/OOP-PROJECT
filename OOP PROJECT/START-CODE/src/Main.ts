import { Customer } from "./human/customer/Customer";
import { Waiter } from "./human/staff/Waiter";
import { Drink, DrinkCategory } from "./menu/Item/Drink";
import { Food, FoodCategory } from "./menu/Item/Food";
import { Restaurant } from "./Restaurant";
import { Chair } from "./rooms/Chair";
import { Room } from "./rooms/Room";
import { Table } from "./rooms/Table";
import { Gender } from "./human/Person";
import { Chef } from "./human/staff/Chef";
import { Staff, StaffCategory } from "./human/staff/Staff";
import { ItemOrder } from "./menu/Item/ItemOrder";

let hakRestaurant = new Restaurant('Hak Dilicious', 'st.371, Phnom Penh');

let spaghetti = new Food('Spaghetti balognes', 20000, FoodCategory.SPAGHETTI);
let burger = new Food('Chiken', 24000, FoodCategory.BURGER);
let sanwich = new Food('Beff Sanwich', 28000, FoodCategory.SANWICH);
let coca = new Drink('Coke', 4000, DrinkCategory.SOFTDRINK);
let angkor_Beer = new Drink('Angkor Beer', 4000, DrinkCategory.BEER);
let hot_Latte = new Drink('Hot Latte', 4000, DrinkCategory.COFFEE);
let green_tea = new Drink('Green Tea', 4000, DrinkCategory.TEA);

hakRestaurant.menu.addItem(spaghetti, burger, sanwich, coca, angkor_Beer, hot_Latte, green_tea);

let chair1 = new Chair();
let chair2 = new Chair();
let chair3 = new Chair();
let chair4 = new Chair();

let table1 = new Table(1);
let table2 = new Table(2);
let table3 = new Table(3);
let table4 = new Table(4);
table1.addChair(chair1, chair2, chair3, chair4);
table2.addChair(chair1, chair2, chair3, chair4);
table3.addChair(chair1, chair2, chair3, chair4);
table4.addChair(chair1, chair2, chair3, chair4);

let room1 = new Room(1);
let room2 = new Room(2);

room1.addTable(table4, table3);
room2.addTable(table1, table2);

hakRestaurant.rooms.addRoom(room1);
hakRestaurant.rooms.addRoom(room2);


let ngaCus = new Customer('Nga', 22, Gender.MALE);

let customerOrder = new ItemOrder();
customerOrder.addItemToOrder(spaghetti, burger, green_tea);
let waiter = new Waiter(StaffCategory.WAITER, 'Hak', 22,Gender.MALE, 20000);

// waiter.createOrder(1, ngaCus, customerOrder);
// console.log(customerOrder.getItems());
let sophimChef = new Chef(StaffCategory.CHEF, 'Sophim', 30, Gender.MALE, 20000);
sophimChef.takeOrder(waiter.getOrder());
hakRestaurant.orders.addOrder(sophimChef.getOrders());
// console.log(hakRestaurant.orders);
console.log(waiter.getOrder());
