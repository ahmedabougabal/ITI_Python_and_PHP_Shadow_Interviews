/**
 * Waht is the expeced output of the following script? why?
 */

let x = 10;
console.log('x: ' + x)
if(true){
  let x = 11;
  console.log('x: ' + x);
}

console.log('x: ' + x)

var y = 100;
console.log('y: ' + y)
if(true){
  var y = 1000;
  console.log('y: ' + y);
}

console.log('y: ' + y);