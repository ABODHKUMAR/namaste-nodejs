const crypto = require('crypto');
console.log("Hello World!");

var a = 1078698;
var b = 20;

//password-based key derivation function
//synchronous version
crypto.pbkdf2Sync('password', 'salt', 5000000, 64, 'sha512');
console.log("Key derived synchronously");

setTimeout(() => {
  console.log("This is a should run Immediately callback");
}, 0);
function multipleFn(x, y) {
  return x * y;

}
var result = multipleFn(a, b);
console.log(result);