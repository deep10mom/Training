import {IActivity} from './interface';

function footrad(x:number){
    x=x+10;
    console.log(x);
}
var footnter=function(x:number){
    x=x+10;
    console.log(x);
}
var foo=(x:number)=>{
    x=x+10;
    console.log(x);
}
var dosomething=(y:number)=>(x)=>y*y*x;
((x:number)=>{
    x=x+10;
    console.log(x);
})(12);

foo(67);
footnter(56);
var s=dosomething(3);
console.log(s(200));
dosomething(100)(100);//currying of function:calling nested functions

export class Person implements IActivity{
    Name:string;
    protected Age:number;
    Gender:any[]=["Male","Female"];
    Aadhar:string;
    constructor(pName:string,pAge:number,pAdhar:string){
        this.Name=pName;
        this.Age=pAge;
        this.Aadhar=pAdhar;
        public Walk():string{return "Walking....."};
        //public Talk:()=>string=()=>{return "Talking....."};
        public Talk=()=>"Talking..."
    }
   

}
export class Employee extends Person{
    EmployeeId:number;
    Department:string;
    private _salary:number;
    constructor(pNmae:string,pAge:number,pAdhar:string,pDept:string,pSalary:number){
        super(pNmae,pAge,pAdhar);
       
        this.Department=pDept;
        this._salary=pSalary;
        this.EmployeeId=this.GenerateEmpId();

    }
    private GenerateEmpId(){
        return Math.random()*1000+Math.random();
    }
    GetEmployeeDetails(){
        return this;
    }
    GetAge(){
        return this.Age;
    }
    getSalary(){
        return this._salary;
    }
}
var obj1=new Person("Deepa Kesjri",23,"9837837");
console.log(obj1.Talk());
//console.log(obj1.Name);

var obj=new Employee("Deepa Keshri",23,"987654321","IBGT",50000);
console.log(obj.GetEmployeeDetails());
console.log(obj.GetAge());
console.log(obj.getSalary());






