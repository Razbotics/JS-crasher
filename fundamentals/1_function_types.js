//These are jargons
// Function statement/Declaration, Hoisted
function statement() {
  console.log("Function Statement");
}

// Function Expression, Not Hoisted
var Expression = function () {
  console.log("Function Expression");
};
// Expression()

// Named Function Expression
var NamedExpression = function named() {
  console.log("Named Function Expression");
};
// called by NamedExpression(), Not by named()

// Arrow Functions
var arrowFunction = () => {
  console.log("Arrow Function");
};

// Anonymous Function
// function () {
//   console.log("Anonymous Function")
// }

// First Class functions - Ability of a function to be treated as value
