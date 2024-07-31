/**
 * 
 * What is the expected output ot the following script?
 * Please spicfy the output in order, and specify the wait period between each log and the other (if exists)
 */

function wait(period) {
  
  const end = Date.now() + period;
  while (new Date < end) {
   
  }
  console.log('finish waiting');
}

console.log('before setTimeOut'); 

setTimeout(() => {console.log('in 5 seconds timer')}, 5000);
setTimeout(() => {console.log('in 1 second timer')}, 1000);


wait(7000);
console.log('After wait call');

