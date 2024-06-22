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

let s1 = "rat";
let s2 = "tar";

function isAnagram(s1, s2) {
    let obj1={};
let obj2={}
  if (s1.length !== s2.length) return false;
    for(let i=0; i<=s1.length ; i++){
        obj1[s1[i]]= (obj1[s1[i]] || 0)+1
        obj2[s2[i]]=(obj2[s2[i]] || 0)+1
    }
    
    for(const key in obj1){
        if(obj1[key] !== obj2[key] ) return false;
    }
    return true;
}

console.log(isAnagram(s1, s2));

