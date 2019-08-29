"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(Length, Bredth) {
        this.Length = Length;
        this.Bredth = Bredth;
    }
    Rectangle.prototype.draw = function () { return "Draw Rectangle"; };
    ;
    Rectangle.prototype.Area = function () { return this.Length * this.Bredth; };
    ;
    return Rectangle;
}());
exports.Rectangle = Rectangle;
