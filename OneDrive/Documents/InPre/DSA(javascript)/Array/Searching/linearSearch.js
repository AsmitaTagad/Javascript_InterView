//it start from 0 index util length of array and found the target
//example: arr=[1,6,2,3,0,6,4] , target=0


const foundtarget=(arr,target)=>{
    for (let i=0; i< arr.length ; i++){
        if (arr[i]===target){
            return i;
        }
    }
    return -1;
}


const IFoundThrInbuilt=(nums,target)=>{
 return nums.findIndex((item)=> item === target)
}





console.log(foundtarget([1,6,2,3,0,6,4],0))   // 4 
console.log(IFoundThrInbuilt([1,6,2,3,0,6,4],10)) 
