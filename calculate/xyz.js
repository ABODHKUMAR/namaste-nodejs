// function x(){
//     let a = "a"

//     function b(){
//         console.log("b")
//     }
// }
// console.log(a)

(function (module, require) {
    require('./path/to/temp.js');
    function  calculateMultiple(a,b){
        let result = a * b;
        console.log(result);
    }
    module.exports = { calculateMultiple };
})();