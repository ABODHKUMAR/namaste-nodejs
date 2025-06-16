const { calculateMultiple } = require('./multiple.js');
const { calculateSum }= require('./sum.js');
calculateSum(2,3);
calculateMultiple(4,5);
module.exports = {
  calculateMultiple,
  calculateSum
};