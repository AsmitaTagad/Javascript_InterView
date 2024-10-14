//it is used to expand the elements into indivituals , it make the collection like objects or arrays readable and simple

//operations on the array using spread operator
//1. Expand/sprad array
const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7];
console.log(arr2); //[ 1, 2, 3, 4, 5, 6, 7 ] here sprad the arr into arr2 (newArray)

//2. copying array
//it will make the shallow copy of orignal array

const shallowCopy = [...arr];
console.log(shallowCopy); //[ 1, 2, 3, 4 ]

//3. Merging Arrays : we can merge two or more arrays together
const arr3 = [7, 45, 72, 23];
const merged = [...arr, ...arr3];
console.log(merged); //[1,  2,  3,  4, 7, 45, 72, 23]


