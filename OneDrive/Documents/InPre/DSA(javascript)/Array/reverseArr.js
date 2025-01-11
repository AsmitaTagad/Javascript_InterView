//1.Implement a function to reverse an array.
//eg. arr=[1,2,3,4,5,6] ==> arr=[6,5,4,3,2,1]



const arr=[1,2,3,4,5,6];

//1. using Inbuild reverse method

const arr1=arr.reverse();  //directly take the reference of arr here instead value
// console.log("arr1",arr1)   //arr1 [ 6, 5, 4, 3, 2, 1 ]
// console.log("arr",arr);    //arr [ 6, 5, 4, 3, 2, 1 ];



function ReverseArr(arr){
  for(let i=0; i<=arr.length-1; i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
  }
  return arr;
}


console.log(ReverseArr(arr))
