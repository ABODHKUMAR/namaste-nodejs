const fs = require('fs');
const a = 100;
setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("Time exprired 1");
}, 0);

Promise.resolve().then(()=>{
    console.log("Promise resolved");
})

fs.readFile("./calculate/file.txt", () => {
    setTimeout(() => {
    console.log("Time exprired 2");
    }, 0);


    process.nextTick(() => {
    console.log("Process next tick2");
    });

    setImmediate(() => {
    console.log("setImmediate");
    });

  console.log("File read completed");
});

process.nextTick(() => {
  console.log("Process next tick");
});
console.log("Last line of code in the file");