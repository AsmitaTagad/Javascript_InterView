//variables are nothing but containers in js which is help to store the values 

//their is three type of variables var, let, const
//var is function scope variable
//let and const is block scope variable ,let and const is use in modern js
//const is use to declare the constant variable
//let is use to declare the variable which can be change later
//var is use to declare the variable which can be change later and can be redeclare in same


var greet="Good Morning";
let sirName="Tagad";
const Name="Asmita";

function HelloGreet(){
  console.log("var inside Function:",greet)   //var inside Function: Good Morning
  console.log("let inside Function:",sirName)  //let inside Function: Tagad
  console.log("const inside Function:",Name)   //const inside Function: Asmita
  if(Name === "Asmita"){
     greet="Good Evening";
     sirName="demo1";
     Name="demo"
  }
  console.log("sirname2", sirName)   //demo1
  console.log("Name2", Name) //TypeError: Assignment to constant variable.
}

HelloGreet()