const x = {
  name: 'Islam', 
  gradYear: '2023',

  fun: function() {
    console.log(this);
    function inner() {
      console.log(this);
    }
    const arrow = () => {
      console.log(this);
    }
    inner();
    arrow();
  }
}


x.fun();
