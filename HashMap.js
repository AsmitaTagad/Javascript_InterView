//it is similar to object where ww can store the value in the key value pair as well as retrive , delete the values

//to intialize map we use new keyword
const array = [4, 7, 3, 6, 28, 74, 46, 90, 100];

let newMap = new Map();

const getFrequency = (array, newMap) => {
  for (let i = 0; i < array.length; i++) {
    // Check if key present or not
    if (!newMap.has(array[i])) {
      newMap.set(array[i], 1); // Set initial count to 1
    } else {
      newMap.set(array[i], newMap.get(array[i]) + 1); // Increment the count
    }
  }
  return newMap;
};

// Find the frequency of this array
console.log(getFrequency(array, newMap));
