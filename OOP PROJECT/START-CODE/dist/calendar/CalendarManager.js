"use strict";
exports.__esModule = true;
exports.CalendarManager = void 0;
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.events = [];
    }
    CalendarManager.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    /**
     * @returns all appointement for the given doctor
     */
    CalendarManager.prototype.getAllAppointementFor = function (doctor) {
        var doctorAppointments = [];
        this.events.forEach(function (event) {
            var doctorAppointment = event;
            if (doctorAppointment)
                if (doctorAppointment.getDoctor().isEquals(doctor)) {
                    doctorAppointments.push(doctorAppointment);
                }
        });
        return doctorAppointments;
    };
    /**
     *
     * @returns true if the doctor is free at given date (no appointement) - false otherwise
     */
    CalendarManager.prototype.isDoctorFree = function (date, doctor) {
        var result = true;
        var doctorApm = this.getAllAppointementFor(doctor);
        if (doctorApm.length > 0) {
            for (var i = 0; i < doctorApm.length; i++) {
                if (doctorApm[i].getStartDate().isEqual(date) || doctorApm[i].getEndDate().isEqual(date)) {
                    result = false;
                }
            }
        }
        return result; //TODO
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;
