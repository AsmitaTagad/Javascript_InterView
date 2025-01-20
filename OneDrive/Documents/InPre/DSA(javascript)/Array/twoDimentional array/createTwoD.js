let rows = 4;
let columns = 4;
let array1 = [];
for (let i = 0; i < rows; i++) {
  array1[i] = [];
  for (let j = 0; j < columns; j++) {
    array1[i][j] = null;
  }
}
console.log(array1);

//method 2:
const array3 = Array.from({ length: rows }, () => new Array(columns).fill(0)); //[ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
console.log(array3);


