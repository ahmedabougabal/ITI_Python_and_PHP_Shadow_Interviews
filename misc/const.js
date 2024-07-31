/**
 * Waht is the expeced output of the following script? why?
 */

const arr = [1, 2, 3];
arr.push(4);
const x = arr.concat([5]);
arr[0] = 10;
console.log(x)
console.log(arr);

