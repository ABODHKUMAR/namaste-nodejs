// let name1 = "Namaste NodeJs";

// const calculateMultiple = require('./calculate/multiple.js');
// const calculateSum = require('./calculate/sum.js');

// var a = 10;
// var b = 20;

// console.log(name1);
// console.log(a+b);
// console.log(this); //this refers to {}
// console.log(globalThis)
// console.log(globalThis === this); // false
// console.log(globalThis === global); // true

// console.log(calculateMultiple(a, b));
// console.log(calculateSum(a, b));

// const {calculateMultiple, calculateSum} = require("./calculate/index.js");
// let name1 = "Namaste NodeJs";
// let a = 10;
// let b = 20;
// console.log(name1);
// console.log(a + b);
// console.log(calculateMultiple(a, b));
// console.log(calculateSum(a, b));

//latest vesion of nodejs
const { TextEncoder, TextDecoder } = require("node:util");
const util = require("node:util");
//older version of nodejs
const { TextEncoder, TextDecoder } = require("util");
