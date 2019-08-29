function Havefun(partyname:string):string{
    var arr:string[]=[];
    var obj:any={k1:0,k2:"",k3:[],k4:{}}
    return "Nice party at"+partyname;

}
//class,interface,public,private,protected,static
const con:number=100;
class A{

    public prop1:string;
    public static stpro:number;
    constructor(){
        
    }
    fun(){
        this.prop1="value";
        console.log("hello");
    }
}
var objA:A=new A();
console.log(objA.fun());
var output:string=Havefun("fresher");
console.log(output);
console.log("HELLO !!!");