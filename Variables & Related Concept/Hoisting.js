//Hoisting is the process where all the variables decalred at the top of it's functional scope
//Variable Hoisting: var , let and const all of them hoisted at the top of function scope  if we try top access var we got the undefined , instead for let and cost got the referenceError , they create
//Tempory Dead Zone : it is refer to the period between let , const variable decaration to intializing the value to them.

//1. var
console.log(x); // Output: undefined
var x = 5;

//2.let or const (TDZ)
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

//3.Function Hoisting : Function Declarations are hoisted entirely, can access before it's call
greet(); // Output: "Hello"
function greet() {
  console.log("Hello");
}

//4.Function Expressions (with var, let, or const) are not hoisted in the same way. Only the variable declaration is hoisted, not the function itself.
console.log(sum); // Output: undefined
var sum = function () {
  return 10 + 20;
};

console.log(sum); // ReferenceError
const sum = () => 10 + 20;

// Class Hoisting (TDZ)
// Classes declared using class are hoisted, but like let and const, they are not initialized until their definition is encountered.

const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {
  constructor() {
    this.name = "Example";
  }
}


