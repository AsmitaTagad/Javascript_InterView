//given an array of integer num and integer target, return indices of the two number such that they add up to the target


const nums =[5,2,7,11,15];
const target=9;

//using brute force method

// function findSum(nums, target){
//   for (let i=0; i< nums.length; i++){
//     if(nums[i] + nums[i+1] === target){
//         return [i, i+1];
//     }
// }  
// }

//2. nested loop

// function findSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null; 
// }


//3. using Two pointer method

function findSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null; // If no pair is found
}
// console.log(findSum(nums, target)); 
nums.sort((a,b)=> a-b)
console.log(findSum(nums, target)); // Output: [0, 1]


