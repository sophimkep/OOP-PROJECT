"use strict";
exports.__esModule = true;
var Customer_1 = require("./human/customer/Customer");
var Waiter_1 = require("./human/staff/Waiter");
var Drink_1 = require("./menu/Item/Drink");
var Food_1 = require("./menu/Item/Food");
var Restaurant_1 = require("./Restaurant");
var Room_1 = require("./rooms/Room");
var Table_1 = require("./rooms/Table");
var Person_1 = require("./human/Person");
var Chef_1 = require("./human/staff/Chef");
var Staff_1 = require("./human/staff/Staff");
var ItemOrder_1 = require("./menu/Item/ItemOrder");
var Cashier_1 = require("./human/staff/Cashier");
var Order_1 = require("./order/Order");
var Payment_1 = require("./order/Payment");
var Item_1 = require("./menu/Item/Item");
// Create a new restaurant
var hakRestaurant = new Restaurant_1.Restaurant('Hak Dilicious', 'st.371, Phnom Penh');
// Create Food
var spaghetti = new Food_1.Food('Spaghetti balognes', 20000, Item_1.ItemType.FOOD);
var burger = new Food_1.Food('Chiken', 24000, Item_1.ItemType.FOOD);
var sanwich = new Food_1.Food('Beff Sanwich', 28000, Item_1.ItemType.FOOD);
// Create Drink
var coca = new Drink_1.Drink('Coke', 4000, Item_1.ItemType.DRINK);
var angkor_Beer = new Drink_1.Drink('Angkor Beer', 4000, Item_1.ItemType.DRINK);
var hot_Latte = new Drink_1.Drink('Hot Latte', 4000, Item_1.ItemType.DRINK);
var green_tea = new Drink_1.Drink('Green Tea', 4000, Item_1.ItemType.DRINK);
// Add Food and Drink to MenuItem
hakRestaurant.menu.addItem(spaghetti, burger, sanwich, coca, angkor_Beer, hot_Latte, green_tea);
// Create Customer
var ngaCus = new Customer_1.Customer('Nga', 22, Person_1.Gender.MALE);
var sok = new Customer_1.Customer('Shok', 22, Person_1.Gender.MALE);
// Create a Cashier
var sarathCashier = new Cashier_1.Cashier(Staff_1.StaffCategory.CASHIER, 'Sarath', 30, Person_1.Gender.MALE, 20000);
// Create a waiter
var waiter = new Waiter_1.Waiter(Staff_1.StaffCategory.WAITER, 'Hak', 22, Person_1.Gender.MALE, 20000);
// Create a Chef
var sophimChef = new Chef_1.Chef(Staff_1.StaffCategory.CHEF, 'Sophim', 30, Person_1.Gender.MALE, 20000);
// Create 4 Tables
var table1 = new Table_1.Table(1, 4);
var table2 = new Table_1.Table(2, 2);
var table3 = new Table_1.Table(3, 4);
var table4 = new Table_1.Table(4, 2);
// add customers
table1.addCustomer(ngaCus);
console.log(table1.addCustomer(ngaCus));
// table2.addCustomer(ngaCus); 
// Create 2 rooms
var room1 = new Room_1.Room(1);
var room2 = new Room_1.Room(2);
// Add 2 tables to one room
room1.addTable(table1, table2);
room2.addTable(table3, table4);
// Add 2 rooms into restaurant
hakRestaurant.rooms.addRoom(room1);
hakRestaurant.rooms.addRoom(room2);
// Waiter create order
var customerOrder = new ItemOrder_1.ItemOrder();
customerOrder.addItemToOrder(spaghetti, burger, green_tea);
waiter.createOrder(1, ngaCus, customerOrder, 1, 1);
// Chef take order frome waiter
sophimChef.takeOrder(sarathCashier.getOrder());
// Chef updateOrderStatus
sophimChef.updateOrderStatus(Order_1.OrderStatus.INPROGRESS);
//add order to restaurant
hakRestaurant.orders.addOrder(sarathCashier.getOrder());
sarathCashier.updatePaymentStatus(Payment_1.PaymentStatus.PAID);
// hakRestaurant.orders.removeOrder();
console.log(hakRestaurant.rooms.findFreeRoom());
