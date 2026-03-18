//Sorting

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//  alphabetical by default

let a=[20,9,8,99]
a.sort() //[ 20, 8, 9, 99 ] wrong  compare as strings
console.log(a) 
a.sort((a,b)=>a-b);//ascending
console.log(a);//[ 8, 9, 20, 99 ]
a.sort((a,b)=>b-a); //reverse descending
console.log(a);// [ 99, 20, 9, 8 ]