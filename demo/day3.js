"use strict";
exports.__esModule = true;
function fun(p1, ptitle, extras, ex) {
    if (ptitle === void 0) { ptitle = "in function fun"; }
    var members = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        members[_i - 4] = arguments[_i];
    }
    //function fun(p1:string,extras?:any,ex?:any,...members:string[],ptitle:string="in function fun"){
    console.log(p1);
    console.log(ptitle);
    console.log(extras);
    console.log(ex);
    console.log(members);
}
fun("Anisha", "keshri");
//fun("Anisha","Deepa","a","p",["k","s","m","d"],"u","e");
//fun("Ansiha","deepa","sneha",["deepak","anu","sanu","priya"],"shash");
function exp() {
    var ints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ints[_i] = arguments[_i];
    }
    console.log(ints);
}
exp(["deepa", 1]);
var greeter = /** @class */ (function () {
    function greeter(pName, pContact, pPlace) {
        if (pName === void 0) { pName = ""; }
        var pExtras = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            pExtras[_i - 3] = arguments[_i];
        }
        this._privateVar = "I am priviate";
        this.Name = pName;
        this.Contact = pContact;
        this.Place = pPlace;
        this.Extras = pExtras;
    }
    return greeter;
}());
exports.greeter = greeter;
var obj1 = new greeter("Deepa", [], "hyatt gachibowli", "ui");
console.log(obj1.Name);
console.log(obj1.Place);
console.log(obj1.Contact);
console.log(obj1.Extras);
