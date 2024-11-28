//Scope means the current execution context it determines the accessibility of variables , object and functions
//Global scope is the outermost scope in which all variables , object and functions are defined
//Local scope is the inner scope in which variables , object and functions are defined
//Block scope is the scope that is defined by a block of code such as if , for ({scope inside cruly brc like if else})
//Function scope is the scope that is defined by a function
//let and const are block scoped while var is function scoped
let x = 10;
var y= 2;
if (true) {
    let x= 20; 
    const name="Asmita"
    console.log(x); //20
    console.log(y); //2
    console.log(name); //Asmita
    }
    console.log(x); //10
    console.log(y);//2
  console.log(name)  //ReferenceError: name is not defined

