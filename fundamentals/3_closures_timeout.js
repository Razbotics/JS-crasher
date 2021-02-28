function counter() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// counter();
//Printing 5, 5 times because all timeout function i points to same memory location

// solution use let
function counter2() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// counter2();
// solution works, reason - let are block scoped

// solution with var
function counter3() {
  for (var i = 0; i < 5; i++) {
    function wrapper(counter) {
      setTimeout(() => {
        console.log(counter);
      }, counter * 1000);
    }
    wrapper(i);
  }
}

counter3();
// solution works, reason - a new value is passed to wrapper function, thus all timeouts have there own copy of variables
