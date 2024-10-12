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

//***doesn't have access of argument object  */

const obj = {
  name: "Asmita",
  age: 26,
  designation: "Software Developer",
};
function ArguAccess1() {
  // console.log(arguments); //[Arguments] {
  //                 '0': { name: 'Asmita', age: 26, designation: 'Software Developer' }
  //               }

  console.log(arguments[0].name);  //Asmita
}

const ArguAccess = () => {
  console.log(arguments);
};

// ArguAccess1(obj);
// ArguAccess(obj);


//but in the arrow function we can access the argument using Rest Operator

const arguAccessusingRest=(...argu)=>{
  console.log(argu)                                     //[ { name: 'Asmita', age: 26, designation: 'Software Developer' } ]
  console.log(argu[0].age)   //26
}

arguAccessusingRest(obj)