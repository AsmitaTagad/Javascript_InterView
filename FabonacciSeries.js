// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

 //1. create fabonacci series
//    // 0,1 => 0+1=1, 1+1=2,1+2=3, 2+3=5.....[0,1,1,2,3,5...]
//    const n=10;    
//    const arr=[0,1]
//    for(let i = 2; i<= n; i++){
//        arr[i]=arr[i-1]+arr[i-2]
//    }
//    console.log(arr)
   
   
//    //Identify if fabonacci or not 
//   const arr1 = [0, 1, 1, 2, 3, 5, 8, 26];
// let i = 2;
// let isValid = true;

// while (i <= arr1.length) {
//   if (arr1[i] === arr1[i - 1] + arr1[i - 2]) {
//     i++;
//   } else {
//     isValid = false;
//     break;
//   }
// }

// console.log(isValid);


//create fabinacci using recursion 

//The process in which a function calls itself directly or indirectly is called recursion using problems can be solved  Towers of Hanoi (TOH), Inorder/Preorder/Postorder Tree Traversals, DFS of Graph, etc. 

const n=3;
let array=[0,1];

function fib(n){
  if(n<=1) return n;

  return fib(n-1)+fib(n-2);
  
}

console.log(fib(n))

//here what happen if our 0th and 1st index less than 1 hai then we will return 1 
 //return 1
//fib(n-1)=> fib(3-1) => fib(2) => fib(2-1)=> fib(1)=> 1
   // fib(n-2)=> fib(3-2)=>fib(1)=> 1 
   
   //==> [0,1,1,1+1=2] => 2