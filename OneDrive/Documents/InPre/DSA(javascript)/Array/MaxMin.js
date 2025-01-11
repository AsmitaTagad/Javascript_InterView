//find out the max min number from array
const arr = [23, 7, 1, 2, 89, 0];

//method : sort and return minmax
function FindbyBruteMethod(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("i", i)
    for (let j = i + 1; j < arr.length; j++) {
      // console.log("j", j)
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let max = arr[arr.length - 1];
  let min = arr[0];
  return { min, max };
}

// method 2. Two pointer

function TwoPointerMethod(arr) {
    if (!arr || arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
  
    let left = 0; 
    let right = arr.length - 1; 
  
    let min = arr[left];
    let max = arr[right];
  
    while (left <= right) {
      if (arr[left] < min) {
        min = arr[left];
      }
      if (arr[right] < min) {
        min = arr[right];
      }
      if (arr[left] > max) {
        max = arr[left];
      }
      if (arr[right] > max) {
        max = arr[right];
      }
      left++;
      right--;
    }
  
    return { min, max };
  }

// console.log(TwoPointerMethod(arr));

//O(n)
function findMinAndMax(arr) {
    if (!arr || arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
  
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }

console.log(findMinAndMax(arr))






