/**
 * Interview Question
 * What is the expected output ot the following script?
 * Please specify the output in order, and specify the wait period between each log and the other (if exists)
 */

function wait(period) {
  const end = Date.now() + period;
  while (new Date < end) {

  }
  console.log('finish waiting'); // 2
}

console.log('before setTimeOut'); // 1 

setTimeout(() => { console.log('in 5 seconds timer') }, 5000); // 5
setTimeout(() => { console.log('in 1 second timer') }, 1000); // 4 


wait(7000); // 2 , block the event loop for 7 seconds then prints 'finish waiting'
console.log('After wait call'); // 3



/**
 * stackoverflow if encountered mermaid chart issues: 
 * https://stackoverflow.com/questions/76961008/add-bullet-points-in-mermaid-diagram
 *  */
