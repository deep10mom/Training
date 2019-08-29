function fun(p1:string,ptitle:string="in function fun",extras?:any[],ex?:any,...members:string[]){
    //function fun(p1:string,extras?:any,ex?:any,...members:string[],ptitle:string="in function fun"){
    console.log(p1);
    console.log(ptitle);
    console.log(extras);
    console.log(ex);
    console.log(members);
}
fun("Anisha","keshri");
//fun("Anisha","Deepa","a","p",["k","s","m","d"],"u","e");
//fun("Ansiha","deepa","sneha",["deepak","anu","sanu","priya"],"shash");

function exp(...ints:any[]){
    console.log(ints);
}
exp(["deepa",1]);

export class greeter{//make it public outside the class
    private _privateVar="I am priviate";
    public Name:string;
    public Contact:string[];
    public Place:string;
    public Extras:string[];
    constructor(pName:string="",pContact:string[],pPlace?:string,...pExtras:string[]){
        this.Name=pName;
        this.Contact=pContact;
        this.Place=pPlace;
        this.Extras=pExtras;
    }
    //multiple constructor not allowed

}
var obj1=new greeter("Deepa",[],"hyatt gachibowli","ui");
console.log(obj1.Name);
console.log(obj1.Place);
console.log(obj1.Contact);
console.log(obj1.Extras);

