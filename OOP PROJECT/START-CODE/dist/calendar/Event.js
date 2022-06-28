"use strict";
exports.__esModule = true;
exports.Event = exports.EventCategory = void 0;
var EventCategory;
(function (EventCategory) {
    EventCategory["DOCTOR_APPOINTEMENT"] = "doctor_appointment";
})(EventCategory = exports.EventCategory || (exports.EventCategory = {}));
var Event = /** @class */ (function () {
    function Event(category, start, end) {
        this.category = category;
        this.start = start;
        this.end = end;
    }
    return Event;
}());
exports.Event = Event;
