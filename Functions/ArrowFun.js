//arrow function is new feature added in ES6

//diffence between arrow function and normal function

// 1.arrow function don't have it's own this Value.Instead, they inherit this from the surrounding scope.

//example:using normal function: In a regular function, this refers to the global object or undefined (in strict mode) when used in functions like setTimeout. access to the global scope (window object)

const NormalFun = {
  name: "Rahul",
  age: 25,
  empName: setTimeout(function () {
    console.log(this.name); //undefined
  }, 1000),
};

//Arrow function: variable and reference it inside the function.(access to the surrounded scope/ lexical scope )

const arrowFun = {
  name: "Rahul",
  age: 25,
  empName: function () {
    setTimeout(() => {
      console.log(this.name); // 'Rahul'
    }, 1000);
  },
};

arrowFun.empName();
