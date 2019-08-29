"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.Radius = radius;
    }
    Circle.prototype.draw = function () { return "Draw Circle"; };
    ;
    Circle.prototype.Area = function () { return 3.13 * this.Radius * this.Radius; };
    ;
    return Circle;
}());
exports.Circle = Circle;
