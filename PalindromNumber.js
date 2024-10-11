// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const num1 = "121";
const num2 = "123";

// function getPalindromNum(num) {
//   num.toString().split("");
//   //split used to split each element with given expression and return array ex. 123=> [ '1', '2', '3' ]

//   num.toString().split("").reverse()[
//     //here reverse method use to reverse the array ex.[ '1', '2', '3' ] => node /tmp/e4Js4dKJDk.js
//     ("3", "2", "1")
//   ];
//   num.toString().split("").reverse().join("");
//   //here join method used to join the content ex. [ '3', '2', '1' ] => 321

//   if (num === num.toString().split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(getPalindromNum(num2));
// console.log(getPalindromNum(num1));

//method 2: without js (using Two pointer method)

function findPalindromNum(num) {
  const arr = num.toString().split("");
  let me = 0;
  let fri = arr.length - 1;
  while (fri > me) {
    if (arr[me] === arr[fri]) {
      me++;
      fri--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(findPalindromNum(12341));
