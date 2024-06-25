//given an array num, return true if any duplicate element found 

const num = [1, 2, 3];
let obj = new Map();
for (let i = 0; i < num.length; i++) {
    obj.set(num[i], (obj.get(num[i]) || 0) + 1);
}
function foundDuplicate(obj, num){
    for (let [key, value] of obj) {
    if (value > 1) {
        return false;
    }
}
return true;
}

console.log(foundDuplicate(obj, num))
