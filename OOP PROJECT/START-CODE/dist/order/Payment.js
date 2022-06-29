"use strict";
exports.__esModule = true;
exports.Payment = exports.PaymentStatus = void 0;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAID"] = "Paid";
    PaymentStatus["UNPAID"] = "Unpaid";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.updatePaymentStatus = function (status) {
        this.order.updatePaymentStatus(status);
    };
    return Payment;
}());
exports.Payment = Payment;
