let a=[4,78,90,44]
a.push(89); // add the element at last of the array
console.log(a); //[ 4, 78, 90, 44, 89 ]

a.pop();// Remve the last element from aaray
console.log(a); //[ 4, 78, 90, 44 ]

a.push(67,97);// can add multile element at a time
console.log(a); //[ 4, 78, 90, 44, 67, 97 ]

a.unshift(55) // add element from the begining
console.log(a) //[55,  4, 78, 90,44, 67, 97]

a.shift() //remove element  from the begining
console.log(a);//[ 4, 78, 90, 44, 67, 97 ]

//splice( Start,deletecount, itemsto add)
a.splice(2,1) // remove the 1 element at index 2 i.e 90 in this case
console.log(a) //[ 4, 78, 44, 67, 97 ]

a.splice(2,0,89) // add element 89 at the index 2 (o don't remove anything)
console.log(a) //[ 4, 78, 89, 44, 67, 97 ]

a.splice(2,3,7,8,6)// replace  3 element from index 2 add replace with 7,8,9
console.log(a)// [ 4, 78, 7, 8, 6, 97 ]
