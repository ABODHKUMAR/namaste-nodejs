let name1 = "Namaste NodeJs";

var a = 10;
var b = 20;

console.log(name1);
console.log(a+b);
console.log(this); //this refers to {}
console.log(globalThis)
console.log(globalThis === this); // false
console.log(globalThis === global); // true
