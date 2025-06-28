function calculateMultiple(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;
}

setTimeout(() =>{
  console.log("This is calculateMultiple module");
}, 10000);

module.exports = {calculateMultiple};
