const fs = require('fs');
const https = require('https');

console.log("Hello World!");

var a = 1078698;
var b = 20;
https.get('https://dummyjson.com/products/1', (res) => {
    console.log("fetched data");
});

setTimeout(() => {
    console.log("This is setImmediate callback");
},5000);

fs.readFile('./calculate/file.txt', 'utf-8', (err, data) => {
    console.log("File read completed");
    console.log(data);
});

function multipleFn(x, y) {
    return x * y;
}
var result = multipleFn(a, b);
console.log(result);