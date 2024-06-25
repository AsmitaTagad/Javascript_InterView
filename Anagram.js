// anagram means if both strings made or having same char like rat or tar both having same char's it is pure anagram string

//using normal methods
// let s1 = "rat";
// let s2 = "tary";
// function isAnagram(s1, s2) {
//   if (s1.length !== s2.length) return false;

//   const s11 = s1.split("").sort().join("");
//   const s22= s2.split("").sort().join("");
//   return s11 === s22
// }

// console.log(isAnagram(s1, s2));

//using javascript objects

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// let s1 = "rat";
// let s2 = "tar";

// function isAnagram(s1, s2) {
//     let obj1={};
// let obj2={}
//   if (s1.length !== s2.length) return false;
//     for(let i=0; i<=s1.length ; i++){
//         obj1[s1[i]]= (obj1[s1[i]] || 0)+1
//         obj2[s2[i]]=(obj2[s2[i]] || 0)+1
//     }

//     for(const key in obj1){
//         if(obj1[key] !== obj2[key] ) return false;
//     }
//     return true;
// }

// console.log(isAnagram(s1, s2));

//3. using Map in js
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let obj1 = new Map();
  let obj2 = new Map();
  for (let i = 0; i < s1.length; i++) {
    obj1.set(s1[i], (obj1.get(s1[i]) || 0) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    obj2.set(s2[i], (obj2.get(s2[i]) || 0) + 1);
  }

  for (let [key, value] of obj1) {
    if (obj2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

let s1 = "rat";
let s2 = "tar";
console.log(isAnagram(s1, s2));
