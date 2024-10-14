//these methods used to manupulate the array

//1. push(): used to add array at the end of array
// Note: **The new length of the array after adding the elements**
const array = [1, 2, 3, 4, 5, 5];
console.log(array); //push 10:  [1, 2,  3, 4,5, 5]
array.push(10);

console.log("push 10: ", array); //push 10:  [1, 2,  3, 4,5, 5, 10]

//2. pop() : used to remove last elemet from the array
//Note: ** Return Value: The removed element. If the array is empty, it returns undefined**
array.pop();
console.log("pop 10 :", array); //pop 10 : [ 1, 2, 3, 4, 5, 5 ]

//3. unshift(): used to add element from the begining of the array
//Note: **Return Value: The new length of the array after adding the elements.**
array.unshift(11);

console.log("unshift 11 :", array); //unshift 11 : [11, 1, 2, 3, 4, 5, 5 ];

//4. shift : used to remove element from the begining of the array
//Note: ** Return Value: The removed element. If the array is empty, it returns undefined**
array.shift();
console.log("shift", array); //shift [ 1, 2, 3, 4, 5, 5 ]

//5. Splice(): Used to add, remove, or replace elements in an array.
//Note:** It mutates (modifies) the original array.**
//syntax: array.splice(start, deleteCount, item1, item2, ...)
//   start: The index to start modifying the array.
//   deleteCount: Number of elements to remove from the array (optional).
//   item1, item2, ...: Elements to add at the start position (optional).

//****return array with removed elements (if not then return empty array)****/

const removedEle = array.splice(3); //remove element on the 1th index  (it always count from 1th index) , start to end all
console.log("splice return :", removedEle); //splice return : [ 2, 3, 4, 5, 5 ]
console.log(array);
const removeAndAdd = array.splice(2, 0, 67, 34, 75);
console.log("remove 0 added 3 from index 1: ", removeAndAdd); //[]
console.log(array); // [ 1, 2, 67, 34, 75,3] //added between

//Can remove, add, or replace elements.and Mutates the original array.

//6. slice: Used to extract a shallow copy of a portion of an array.It does not modify the original array.
//syntax: array.slice(start, end)
// start: The index to begin extraction (inclusive).
// end: The index to end extraction (exclusive). If not provided, it extracts till the end of the array.
//***A new array containing the extracted elements. */

const sliced = array.slice(1, 4); // Extract elements from index 1 to 3
console.log("sliced: ",sliced); // Output: [2, 3, 4]
console.log("orignal array :",array); // Output: [1, 2, 3, 4, 5]  (original array remains unchanged)


// Edge case: If start >= array length, it returns an empty array.
// Negative indices: Count from the end of the array.

