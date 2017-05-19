//  const assert = require('assert');
// // after you declared the function
// function greet(name) {
//   return "Hi" + name;
// }
// // console.log(greet(' Bob'));
//  assert.equal(greet(' Bob'), 'Hi Bob');
//
//
// var msg = greet(" Xola");
// console.log(msg);
module.exports = function(name){
    return 'Hi ' + name;
}
const greet = require('./greet');

console.log(greet(' Xola'))
