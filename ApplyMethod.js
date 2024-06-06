//The apply method is similar to call, but it takes arguments as an array. It allows you to invoke a function with a specified this context and an array of arguments.

//real-life ex: suppose i have car and i want to borrow friend car with some passagers list

const person1 = {
  name: "Asmita",
  greet: function (greetings, punctuation) {
    console.log(`${greetings}, My Name is ${this.name} ${punctuation}`);
  },
};

person1.greet.apply(person1, ["Hello", "!"]); //Hello, My Name is Asmita !
