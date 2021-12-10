"use strict";
exports.__esModule = true;
exports.Bike = void 0;
var Bike = /** @class */ (function () {
    function Bike(price, max_speed, miles) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
    }
    Bike.prototype.displayInfo = function () {
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Total Miles: " + this.miles);
    };
    Bike.prototype.ride = function () {
        this.miles += 10;
        console.log("Riding");
        return this;
    };
    Bike.prototype.reverse = function () {
        console.log("Reversing");
        this.miles -= 5;
        return this;
    };
    return Bike;
}());
exports.Bike = Bike;
