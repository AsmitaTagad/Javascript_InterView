// In other scripting/server side languages, variables or functions must be declared before using it.
// In javascript, variables and functions can be used before declaring it. The javascript compiler/interpretor moves all the declarations of variables and functions on
// top. so there will not be any error. This is called hoisting

//example

console.log(a); //undefined even though not decalred
var a = 2;
console.log(a); // 2
// Notes:
//1. javascript only hoists declaration not initialization, until initialization it will be undefined
// 2. Const and Let:

// console.log(b); //ReferenceError: Cannot access 'b' before initialization  , TDZ
let b = 3;
console.log(b); // 3

//here the greet function accessed before it's decalration
greet(); //Good Morning
function greet() {
  console.log("Good Morning");
}

//Arrow function

Greet();     //ReferenceError: Cannot access 'Greet' before initialization, here we are using const. ** class expressions and function expressions (=,=>)are not hoisted, not even var 

const Greet = () => {
  console.log("Hello Greeting!");
};


// Function declarations: Fully hoisted.
// var - Hoisted
// Arrow functions: Not hoisted
// Anonymous Function expressions: Not hoisted
// let and const - Hoisted but not initialized. (Temporal dead zone
// class declarations - Hoisted but not initialized.