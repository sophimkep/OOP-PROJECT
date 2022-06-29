import { Customer } from "./human/customer/Customer";
import { Waiter } from "./human/staff/Waiter";
import { Drink} from "./menu/Item/Drink";
import { Food} from "./menu/Item/Food";
import { Restaurant } from "./Restaurant";
import { Room } from "./rooms/Room";
import { Table } from "./rooms/Table";
import { Gender } from "./human/Person";
import { Chef } from "./human/staff/Chef";
import { StaffCategory } from "./human/staff/Staff";
import { ItemOrder } from "./menu/Item/ItemOrder";
import { Cashier } from "./human/staff/Cashier";
import { OrderStatus } from "./order/Order";
import { PaymentStatus } from "./order/Payment";
import { ItemType } from "./menu/Item/Item";

// Create a new restaurant
let hakRestaurant = new Restaurant('Hak Dilicious', 'st.371, Phnom Penh');

// Create Food
    let spaghetti = new Food('Spaghetti balognes', 20000, ItemType.FOOD);
    let burger = new Food('Chiken', 24000, ItemType.FOOD);
    let sanwich = new Food('Beff Sanwich', 28000, ItemType.FOOD);

// Create Drink
    let coca = new Drink('Coke', 4000, ItemType.DRINK);
    let angkor_Beer = new Drink('Angkor Beer', 4000, ItemType.DRINK);
    let hot_Latte = new Drink('Hot Latte', 4000, ItemType.DRINK);
    let green_tea = new Drink('Green Tea', 4000, ItemType.DRINK);

// Add Food and Drink to MenuItem
    hakRestaurant.menu.addItem(spaghetti, burger, sanwich, coca, angkor_Beer, hot_Latte, green_tea);

// Create Customer
    let ngaCus = new Customer('Nga', 22, Gender.MALE);
    let sok = new Customer('Shok', 22, Gender.MALE);

// Create a Cashier
    let sarathCashier = new Cashier(StaffCategory.CASHIER, 'Sarath', 30, Gender.MALE);

// Create a waiter
    let waiter = new Waiter(StaffCategory.WAITER, 'Hak', 22,Gender.MALE, 20000);

// Create a Chef
    let sophimChef = new Chef(StaffCategory.CHEF, 'Sophim', 30, Gender.MALE);

// Create 4 Tables
    let table1 = new Table(1, 4);
    let table2 = new Table(2, 2);
    let table3 = new Table(3, 4);
    let table4 = new Table(4, 2);

// add customers
table1.addCustomer(ngaCus); 
console.log(table1.addCustomer(ngaCus));
// table2.addCustomer(ngaCus); 
// Create 2 rooms
    let room1 = new Room(1);
    let room2 = new Room(2);

// Add 2 tables to one room
    room1.addTable(table1, table2);
    room2.addTable(table3, table4);

// Add 2 rooms into restaurant
    hakRestaurant.rooms.addRoom(room1);
    hakRestaurant.rooms.addRoom(room2);

// Waiter create order
    let customerOrder = new ItemOrder();
    customerOrder.addItemToOrder(spaghetti, burger, green_tea);
    waiter.createOrder(1, ngaCus, customerOrder, 1, 1);

// Chef take order frome waiter
    sophimChef.takeOrder(sarathCashier.getOrder());

// Chef updateOrderStatus
    sophimChef.updateOrderStatus(OrderStatus.INPROGRESS);

//add order to restaurant
hakRestaurant.orders.addOrder(sarathCashier.getOrder());

sarathCashier.updatePaymentStatus(PaymentStatus.PAID);
// hakRestaurant.orders.removeOrder();
console.log(hakRestaurant.rooms.findFreeRoom());