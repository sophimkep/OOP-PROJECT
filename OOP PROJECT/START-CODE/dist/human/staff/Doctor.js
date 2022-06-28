"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Doctor = void 0;
var Staff_1 = require("./Staff");
/**
 * A doctor is a staff with a mediacal speciality
 */
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(category, name, age, gender, salary) {
        var _this = _super.call(this, category, name, age, gender) || this;
        _this.salary = salary;
        return _this;
    }
    Doctor.prototype.hasSpeciality = function () {
        return this.speciality !== undefined;
    };
    Doctor.prototype.setSpeciality = function (speciality) {
        this.speciality = speciality;
    };
    Doctor.prototype.getSpeciality = function () {
        return this.speciality;
    };
    Doctor.prototype.isEquals = function (other) {
        return this.category === other.category && this.name === other.name && this.age === other.age && this.gender === other.gender && this.category === other.category;
    };
    return Doctor;
}(Staff_1.Staff));
exports.Doctor = Doctor;
