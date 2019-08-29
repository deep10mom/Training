"use strict";
exports.__esModule = true;
var ractangle_1 = require("./ractangle");
var circle_1 = require("./circle");
var square_1 = require("./square");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle_1.Circle(4));
drawAllShapes(new ractangle_1.Rectangle(6, 7));
drawAllShapes(new square_1.Square(5, 5));
var item = new circle_1.Circle(6);
console.log(item.draw());
/*var obj1=new Circle(5);
console.log(obj1.draw());
console.log(obj1.Area());

var obj2=new Rectangle(5,6);
console.log(obj2.draw());
console.log(obj2.Area());

var obj3=new Square(5,5);
console.log(obj3.draw());
console.log(obj3.Area());*/ 
