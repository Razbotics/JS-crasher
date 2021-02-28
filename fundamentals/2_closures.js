// A function together with its lexical scope binded together forms a closure

let multiply = function (x) {
  let val1 = x;
  return function (val2) {
    console.log(val1 * val2);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let add = function (x) {
  let val1 = x;
  return function (val2) {
    console.log(val1 * val2);
  };
};

let addByTwo = add(2);
addByTwo(3);
