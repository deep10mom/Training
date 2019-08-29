//if we have to create function attach a return type to it
//if want a class just create a object and use new keyword



function havefun(){
    var e=1;
    this.games=[1,2,3];
    this.venue="";
    this.coOrdinator={
        name:"Abridge",
        gamesArranged:true,
        lunchArranged:true
    }
    //to make it private just write like a normal function
    function privateDance(){
        return "pdance,pdnace";
    }
    //to make it private use var(second way)
    var pdance=function(){
        return "pdance";
    }
    var objpdance=pdance();
    console.log(objpdance);
    //to make it public use this keyword
    this.dance=function(){
        return e;
    }
        console.log("Having fun...");
}
//prototype is buildin 
havefun.prototype.playgames=function(){
    return "dubsharads,tambola";
}
havefun();
var obj=new havefun();
console.log(obj.coOrdinator.name);
console.log(obj.games[0]);
//console.log(pdance());
console.log(obj.dance());
console.log(obj.playgames());

