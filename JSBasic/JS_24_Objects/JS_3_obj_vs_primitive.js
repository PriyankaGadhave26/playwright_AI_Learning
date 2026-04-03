//// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined

let a=10;
let b=a  // a will be copied to b, so a and b are two different variables in memory
b=20; // when we change the value of b, it will not affect the value of a because a and b are two different variables in memory
console.log(a); // 10
console.log(b); // 20
a=90
console.log(a); // 90
console.log(b); // 20 // when we change the value of a, it will not affect the value of b because a and b are two different variables in memory 


// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1={name:'pramod', age:10};
let obj2=obj1  // obj1 will be copied to obj2, but obj1 and obj2 are referencing the same object in memory, so when we change the value of obj2, it will affect the value of obj1 because obj1 and obj2 are referencing the same object in memory
obj2.name='priya';
console.log(obj1); //{ name: 'priya', age: 10 }
console.log(obj2); // { name: 'priya', age: 10 }
obj1.age=40;
console.log(obj1); // { name: 'priya', age: 40 }
console.log(obj2); // { name: 'priya', age: 40 } // when we change the value of obj1, it will affect the value of obj2 because obj1 and obj2 are referencing the same object in memory