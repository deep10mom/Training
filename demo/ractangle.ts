import {Shape} from './shape';
export class Rectangle implements Shape{
    public Length:number;
    public Bredth:number;
    constructor(Length:number,Bredth:number){
        this.Length=Length;
        this.Bredth=Bredth;
    }
    draw():string{return "Draw Rectangle"};
    Area():any{return this.Length*this.Bredth};

}