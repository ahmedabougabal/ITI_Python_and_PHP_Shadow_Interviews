
function b() {
  function a() {
    console.log(x);
  }

  const x = 10;
  a();
}

const x = 100;
b();