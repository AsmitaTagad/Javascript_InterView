//two sum

const nums = [2, 7, 11, 15];
const target = 9;

function FindTwoSum(nums, target) {
  //1.brute force method
  // for(let i=0; i<nums.length; i++){
  //     for(let j=i+1; j<nums.length; j++) {
  //        if(nums[i]+ nums[j] === target){
  //         return [i,j]
  //        }
  //     }
  // }

  //2. Two pointer method

//   let me = 0;
//   let frd = 1;
//   while (frd < nums.length) {
//     if (nums[me] + nums[frd] === target) {
//       return [me, frd];
//     }
//     me++;
//     frd++;
//   }

  //3.


}

console.log(FindTwoSum(nums, target));
