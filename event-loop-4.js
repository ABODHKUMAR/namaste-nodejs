const fs = require('fs');
setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("Time expired 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

fs.readFile("./calculate/file.txt", () => {
    console.log("File read completed");
});

process.nextTick(() => {
    process.nextTick(() => {
        console.log("inner Process next tick");
    });
    console.log("outer Process next tick");
});

console.log("Last line of code in the file");