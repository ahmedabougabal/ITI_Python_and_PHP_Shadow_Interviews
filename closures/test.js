/**
 * 
 * What is the expected output of the following code? What feature of javascript was used here?
 */

function getIncrementer(){
  let cnt = 0;
  return () => {
    cnt++;
    console.log(cnt);
  }
}

const increment = getIncrementer();

increment();
increment();
increment();

