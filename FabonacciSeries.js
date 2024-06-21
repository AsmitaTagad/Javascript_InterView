// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

 //1. create fabonacci series
   // 0,1 => 0+1=2, 1+2=3, 2+3=5.....[0,1,2,3,5...]
   const n=10;
   const arr=[0,1]
   for(let i = 2; i<= n; i++){
       arr[i]=arr[i-1]+arr[i-2]
   }
   console.log(arr)
   
   
   //Identify if fabonacci or not 
  const arr1 = [0, 1, 1, 2, 3, 5, 8, 26];
let i = 2;
let isValid = true;

while (i <= arr1.length) {
  if (arr1[i] === arr1[i - 1] + arr1[i - 2]) {
    i++;
  } else {
    isValid = false;
    break;
  }
}

console.log(isValid);
