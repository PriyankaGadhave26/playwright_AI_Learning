//checking in array -check if something is array or not

let a=Array.isArray([28,78]);
console.log(a); //true

let d=Array.isArray("a");
console.log(d);// false 

//every (check for each element)
let l=[28,78].every(s=> s<100)
console.log(l) //true
let g=[28,78].every(s=> s>100)
console.log(g) //false

// some (check for at least one element)
let j=[28,78].some(s=> s<100)
console.log(l) //true
let k=[28,8].some(s=> s>10)
console.log(k) //true

