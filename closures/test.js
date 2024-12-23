/**
 * 
 * What is the expected output of the following code? What feature of javascript was used here?
 */

// this is a closure 
function getIncrementer(){
  let cnt = 0; // private variable
  return () => { // returns an inner function
    cnt++; // accessing private variable (cnt is enclosed in the closure's scope)
    console.log(cnt);
  }
}

const increment = getIncrementer();

increment(); // 1
increment(); // 2
increment(); // 3

