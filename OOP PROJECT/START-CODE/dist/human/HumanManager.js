"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customers = [];
        this.staffs = [];
    }
    // adddCustomer(customer: Customer){
    //   this.customers.push(customer);
    // }
    HumanManager.prototype.getcustomers = function () {
        return this.customers;
    };
    HumanManager.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    HumanManager.prototype.getStaffs = function () {
        return this.staffs;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
