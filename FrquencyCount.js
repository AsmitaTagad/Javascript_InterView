//frequency count means we have array which contain some char or any then if that is we have to store the number of count of each char

let a=["a","r","j","b","l", "a","a", "r","y","b","e"]
let obj=new Map();
for(let i=0; i<a.length; i++){
   obj.set(a[i], (obj.get(a[i] )|| 0)+1);
}
console.log(obj)