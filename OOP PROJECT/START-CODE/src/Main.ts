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
import { Cashier } from "./human/staff/Cashier";
import { OrderStatus } from "./order/Order";
import { PaymentStatus } from "./order/Payment";

let hakRestaurant = new Restaurant('Hak Dilicious', 'st.371, Phnom Penh');

let spaghetti = new Food('Spaghetti balognes', 20000, FoodCategory.SPAGHETTI);
let burger = new Food('Chiken', 24000, FoodCategory.BURGER);
let sanwich = new Food('Beff Sanwich', 28000, FoodCategory.SANWICH);
let coca = new Drink('Coke', 4000, DrinkCategory.SOFTDRINK);
let angkor_Beer = new Drink('Angkor Beer', 4000, DrinkCategory.BEER);
let hot_Latte = new Drink('Hot Latte', 4000, DrinkCategory.COFFEE);
let green_tea = new Drink('Green Tea', 4000, DrinkCategory.TEA);

hakRestaurant.menu.addItem(spaghetti, burger, sanwich, coca, angkor_Beer, hot_Latte, green_tea);
let ngaCus = new Customer('Nga', 22, Gender.MALE);

let chair1 = new Chair();
let chair2 = new Chair();
let chair3 = new Chair();
let chair4 = new Chair();
let chair5 = new Chair();
let chair6 = new Chair();
let chair7 = new Chair();
let chair8 = new Chair();
chair1.setCustomer(ngaCus);
// chair2.setCustomer(ngaCus);
console.log(chair1.setCustomer(ngaCus));
// chair4.setCustomer(ngaCus);
let table1 = new Table(1);
let table2 = new Table(2);
let table3 = new Table(3);
let table4 = new Table(4);
let table5 = new Table(1);
let table6 = new Table(2);
let table7 = new Table(3);
let table8 = new Table(4);
table1.addChair(chair1, chair2, chair3, chair4);
table2.addChair(chair1, chair2, chair3, chair4);
table3.addChair(chair1, chair2, chair3, chair4);
table4.addChair(chair1, chair2, chair3, chair4);
table5.addChair(chair5, chair6, chair7, chair8);
table6.addChair(chair5, chair6, chair7, chair8);
table7.addChair(chair5, chair6, chair7, chair8);
table8.addChair(chair5, chair6, chair7, chair8);
// table1.addCustomerFromEachChairToTable();
console.log(table1.getNumberCustomer());
// console.log(table1.getNumberOfChairs());
let room1 = new Room(1);
let room2 = new Room(2);

room1.addTable(table5, table6, table7, table8);
room2.addTable(table1, table2, table3, table4);

hakRestaurant.rooms.addRoom(room1);
hakRestaurant.rooms.addRoom(room2);



let customerOrder = new ItemOrder();
customerOrder.addItemToOrder(spaghetti, burger, green_tea);
let waiter = new Waiter(StaffCategory.WAITER, 'Hak', 22,Gender.MALE, 20000);

waiter.createOrder(1, ngaCus, customerOrder, 1, 1);

let sophimChef = new Chef(StaffCategory.CHEF, 'Sophim', 30, Gender.MALE, 20000);
sophimChef.takeOrder(waiter.getOrder());
sophimChef.updateOrderStatus(OrderStatus.INPROGRESS);
sophimChef.isDone();
hakRestaurant.orders.addOrder(waiter.getOrder());



// ngaCus.payMent(PaymentStatus.PAID);
// console.log(hakRestaurant.orders);

let sarathCashier = new Cashier(StaffCategory.CASHIER, 'Sarath', 30, Gender.MALE, 20000);
// console.log(sarathCashier.receipt(waiter.getOrder()));

// console.log(hakRestaurant.rooms.findFreeRoom());

// console.log(hakRestaurant.rooms);