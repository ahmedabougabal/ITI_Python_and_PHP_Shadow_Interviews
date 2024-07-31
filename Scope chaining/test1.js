/**
 * Waht is the expeced output of the following script? why?
 */

function a() {
  console.log(x);
}

function b() {
  const x = 10;
  a();
}

const x = 100;
b();


//////////////////////////////////////////

function c() {
  function d() {
    console.log(x);
  }

  const y = 10;
  d();
}

const y = 100;
c();

