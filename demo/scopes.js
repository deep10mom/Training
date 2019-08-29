var abc = 100;
if (abc == 100) {
    var abc = 200;
    console.log(abc); //200 if we use let then scopes is restricted.. abc is under this block .
}
console.log(abc);
