let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);

multiplyByTwo(3);
multiplyByThree(4);

// Another fun example
let makeCurry = function (curryType, compliment) {
  console.log(`${curryType} curry is made, serve it with ${compliment}`);
};

let serveChickenCurry = makeCurry.bind(this, "chicken");
serveChickenCurry("rice");
serveChickenCurry("roti");

let serveFishCurry = makeCurry.bind(this, "fish");
serveFishCurry("rice");
serveFishCurry("roti"); //No one eats like this :)

// Another method
let add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let addTwoWith = add(2);
addTwoWith(3);

let addThreeWith = add(3);
addThreeWith(4);
