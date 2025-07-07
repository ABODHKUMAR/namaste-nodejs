const fs = require('fs');
const a = 100;
setImmediate(() => {
  console.log("setImmediate");
});
fs.readFile("./calculate/file.txt", () => {
  console.log("File read completed");
});
setTimeout(() => {
  console.log("Time exprired");
}, 0);

function PrintA() {
    console.log(a);
}
PrintA();
console.log("Last line of code in the file");