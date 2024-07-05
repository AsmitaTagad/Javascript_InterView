//1. Map: map is basically used to iterate over each element of the array , it returns new array without changing/modifying existing.

const fruits = ["orange", "apple", "mango", "banana"];

const mappedArr = fruits.map((item) => item);
console.log("mpArr", mappedArr); //["orange", "apple", "mango", "banana"]

//2. Entries : this array method used to store array values in the key /value pairs

const entArr = fruits.entries();

for (let i of entArr) {
  ////[ 0, 'orange' ],[ 1, 'apple' ], [ 2, 'mango' ], [ 3, 'banana' ]
  console.log(i);
}

//3. Every : this method is used to excute function for each element of the array, and it returns true / false boolean value also it takes callback function in which element, index, array

// function main() {
//   let arr = [12, 16, 34, 28, 56];
//   let value = arr.every(isEven);
//   console.log("v", value);
// }

// function isEven(element, index, array) {
//   return element % 2 == 0;
// }

// main();
