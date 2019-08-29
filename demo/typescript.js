function Havefun(partyname) {
    var arr = [];
    var obj = { k1: 0, k2: "", k3: [], k4: {} };
    return "Nice party at" + partyname;
}
//class,interface,public,private,protected,static
var con = 100;
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.fun = function () {
        this.prop1 = "value";
        console.log("hello");
    };
    return A;
}());
var objA = new A();
console.log(objA.fun());
var output = Havefun("fresher");
console.log(output);
console.log("HELLO !!!");
