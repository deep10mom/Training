import {Shape} from './shape';
import {Rectangle} from './ractangle';


export class Square extends Rectangle implements Shape{
    
    constructor(Length:number,Bredth:number){
        super(Length,Bredth);
       
    }
    draw():string{return "Draw Square"};
    Area():any{return this.Length*this.Bredth};

}