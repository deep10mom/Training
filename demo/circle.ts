import {Shape} from './shape';
export class Circle implements Shape{
    public Radius:number;
    constructor(radius:number){
        this.Radius=radius;
    }
    draw():string{return "Draw Circle"};
    Area():any{return 3.13* this.Radius*this.Radius};

}