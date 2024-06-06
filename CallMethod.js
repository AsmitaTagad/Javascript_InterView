// 1. Call Method :Basically this method allow us to invoke a function with this context and individual arguments.
// Real-life Ex:  suppose i have car and i want to use my friends car with my keys,so here car (method) used , if it were mine own

//******** Method 1 ******** */
// const person1 = {
//   name: "Asmita",
//   greet: function (greetings) {
//     console.log(`${greetings}, My Name is ${this.name}`);
//   },
// };

// person1.greet.call(person1, "Hello"); //Hello, My Name is Asmita

//2. if i have 2 object and i want to use that same function  for second time so don't need to reWrite it i can borrow it

const person2 = {
  name: "Abhay",
};

// person1.greet.call(person2, "Hii"); //Hii, My Name is Abhay

//******** Method 2 ******** */

//3. if function is written inside any object then we call it method
const person1 = {
  name: "Asmita",
};

const greet = function (greetings) {
  console.log(`${greetings}, My Name is ${this.name}`);
};

greet.call(person1, "Hello"); //Hello, My Name is Asmita
greet.call(person2, "Hey"); //Hey, My Name is Abhay
