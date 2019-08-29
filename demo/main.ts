import {Shape} from './shape';
import {Rectangle} from './ractangle';
import {Circle} from './circle';
import {Square} from './square';


function drawAllShapes(shapeToDraw:Shape){
    shapeToDraw.draw();
}

drawAllShapes(new Circle(4));
drawAllShapes(new Rectangle(6,7));
drawAllShapes(new Square(5,5));      

var item:Shape=new Circle(6);
console.log(item.Radius);

/*var obj1=new Circle(5);
console.log(obj1.draw());
console.log(obj1.Area());

var obj2=new Rectangle(5,6);
console.log(obj2.draw());
console.log(obj2.Area());

var obj3=new Square(5,5);
console.log(obj3.draw());
console.log(obj3.Area());*/