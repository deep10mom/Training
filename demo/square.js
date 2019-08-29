"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ractangle_1 = require("./ractangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(Length, Bredth) {
        return _super.call(this, Length, Bredth) || this;
    }
    Square.prototype.draw = function () { return "Draw Square"; };
    ;
    Square.prototype.Area = function () { return this.Length * this.Bredth; };
    ;
    return Square;
}(ractangle_1.Rectangle));
exports.Square = Square;
