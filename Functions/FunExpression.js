//Function Expression:
//here the function stored in the variable as value. and it can't be accessed or hoisted
// console.log(12,greetings )  //ReferenceError: Cannot access 'greetings' before initialization
const greetings=function(){
    return "Hello, My name is Asmita!";
}
console.log(greetings)   //[Function: greetings]
console.log(greetings() ) //Hello, My name is Asmita!