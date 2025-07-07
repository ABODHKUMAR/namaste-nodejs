const fs = require('fs');
const a = 100;
setImmediate(() => {
  console.log("setImmediate");
});
Promise.resolve().then(()=>{
    console.log("Promise resolved");
})
fs.readFile("./calculate/file.txt", () => {
  console.log("File read completed");
});
setTimeout(() => {
  console.log("Time exprired");
}, 0);

process.nextTick(() => {
  console.log("Process next tick");
});
function PrintA() {
    console.log(a);
}
PrintA();
console.log("Last line of code in the file");