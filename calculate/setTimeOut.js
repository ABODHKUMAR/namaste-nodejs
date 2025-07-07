// console.log("Hello World!");

// var a = 1078698;
// var b = 20;

// setTimeout(() => {
//   console.log("This is a delayed message");
// }, 3000);

// function calculateMultiple(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error('Both arguments must be numbers');
//   }
//   return x * y;
// }   

// var result = calculateMultiple(a, b);
// console.log(result);

console.log("Hello World!");

var a = 1078698;
var b = 20;

//This call is only pushed to call stack once the current execution context is completed or the call stack is empty
setTimeout(() => {
  console.log("This is a Immediate callback");
}, 0);
//setTime has trust issues, it does not guarantee the exact time of execution, it only guarantees that the callback will be executed after the specified delay
// Means setTimeout can Execute in 0 second only When the call stack is empty

function calculateMultiple(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return x * y;
}   

var result = calculateMultiple(a, b);
console.log(result);