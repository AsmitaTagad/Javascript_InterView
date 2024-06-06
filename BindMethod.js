//  Returns a new function with a specified 'this' context and optional arguments, which can be invoked later

const person1 = {
  name: "Asmita",
  greet: function (arg1) {
    console.log(`${arg1}, My name is ${this.name}`);
  },
};
const person2 = {
  name: "Abhay",
};

const InvokeLater = person1.greet.bind(person1, "Hi");
InvokeLater(); //Hi, My name is Asmita

const ManyTimeInvoke = person1.greet.bind(person2, "Hello");
ManyTimeInvoke(); //Hello, My name is Abhay
