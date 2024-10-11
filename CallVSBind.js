// Both call() and bind() are methods in JavaScript that allow you to control the value of this when invoking a function, but they behave differently in terms of when the function is executed.
// call() executes the function immediately, while bind() returns a new function that can be invoked later

//example: call immediatly to greet() function and execute immediatly 
const person1 = { name: "Rahul" };
const person2 = { name: "Priya" };

function greet(greeting) {
  console.log(`${greeting}, My Name is ${this.name}`);
}

// greet.call(person1, "Hello"); // "Hello, My Name is Rahul"
// greet.call(person2, "Hi");    // "Hi, My Name is Priya"

//bind: here it will create new function that will be call later
const greetRahul = greet.bind(person1); // Creates a new function with `this` bound to person1
const greetPriya = greet.bind(person2); // Creates a new function with `this` bound to person2

greetRahul("Hello"); // "Hello, My Name is Rahul"
greetPriya("Hi");