//find the first pair from array having sum of zero
//[-5,-4,-3,-2, 0, 2,4,6,8]

let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

//method:1

// function first() {
//     let result=[];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == 0) {
//         //return [arr[i], arr[j]];  //only first pair 
//       result.push([arr[i], arr[j]])  //all the pairs
//       }
//     }
//   }
//   return result;
// } //[ -4, 4 ]

// console.log(first())


/************************  Method 2 ************************* */

let me=0;
let friend=arr.length-1;

function getPair(){
    while(me<friend){
        let sum= arr[me]+ arr[friend]
     if(sum === 0){
        return [arr[me], arr[friend]]
     }else if( sum > 0){
        friend--
     }else{
        me++
     }
    }
}

console.log(getPair())