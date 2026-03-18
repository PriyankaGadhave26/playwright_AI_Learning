let og=[1,2,4];


let a=[...og]
console.log(a); //[ 1, 2, 4 ]

let b=og.slice()
console.log(b); //[ 1, 2, 4 ]

let c=og.concat()
console.log(c); //[ 1, 2, 4 ]

let d=Array.from(og)
console.log(d); //[ 1, 2, 4 ]
// soft copy
a.push(99)
console.log(og)//[ 1, 2, 4 ]
console.log(a)// [ 1, 2, 4, 99 ]

//deepy copy (json)
let m=[2,4,8]
let u=m;
u.push(78);
console.log(u)//[ 2, 4, 8, 78 ]
console.log(m)//[ 2, 4, 8, 78 ]
m.push(7)
console.log(m.length)//5
console.log(u.length)//5