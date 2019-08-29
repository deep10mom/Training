"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
function footrad(x) {
    x = x + 10;
    console.log(x);
}
var footnter = function (x) {
    x = x + 10;
    console.log(x);
};
var foo = function (x) {
    x = x + 10;
    console.log(x);
};
var dosomething = function (y) { return function (x) { return y * y * x; }; };
(function (x) {
    x = x + 10;
    console.log(x);
})(12);
foo(67);
footnter(56);
var s = dosomething(3);
console.log(s(200));
dosomething(100)(100); //currying of function:calling nested functions
var Person = /** @class */ (function () {
    function Person(pName, pAge, pAdhar) {
        this.Gender = ["Male", "Female"];
        //public Talk:()=>string=()=>{return "Talking....."};
        this.Talk = function () { return "Talking..."; };
        this.Name = pName;
        this.Age = pAge;
        this.Aadhar = pAdhar;
    }
    Person.prototype.Walk = function () { return "Walking....."; };
    ;
    return Person;
}());
exports.Person = Person;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(pNmae, pAge, pAdhar, pDept, pSalary) {
        var _this = _super.call(this, pNmae, pAge, pAdhar) || this;
        _this.Department = pDept;
        _this._salary = pSalary;
        _this.EmployeeId = _this.GenerateEmpId();
        return _this;
    }
    Employee.prototype.GenerateEmpId = function () {
        return Math.random() * 1000 + Math.random();
    };
    Employee.prototype.GetEmployeeDetails = function () {
        return this;
    };
    Employee.prototype.GetAge = function () {
        return this.Age;
    };
    Employee.prototype.getSalary = function () {
        return this._salary;
    };
    return Employee;
}(Person));
exports.Employee = Employee;
var obj1 = new Person("Deepa Kesjri", 23, "9837837");
console.log(obj1.Talk());
//console.log(obj1.Name);
var obj = new Employee("Deepa Keshri", 23, "987654321", "IBGT", 50000);
console.log(obj.GetEmployeeDetails());
console.log(obj.GetAge());
console.log(obj.getSalary());
