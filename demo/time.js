function time(){
    this.name="deepa";
    this.empid=491788;
    this.project={
        name:"bank",
        timeduration:"8days",
        deadline:"7 days"
    };
    this.returnname=function(){
        return name;
    }
    this.returnempid=function(){
        return empid;
    }
        
}
var obj=new time();
console.log(obj.name);
console.log(obj.returnempid);
console.log(obj.project);
