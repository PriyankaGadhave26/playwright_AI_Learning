    let a = 10;
let b = ++a;
console.log(a);
console.log(b);

// //  Exp and Result Table
// // Line No | a | Result b
// // 1       |  10 |  NA
// // 2       |  11 |  11
// // 3       | 11 - print | 11
// // 4       | 11 | 11 - print

let x = 10;
console.log('value of x',x++ + x);
// // A+B -> A -> x++ (  ExpA - 10, x-> 11 )
// // + 
// // B -> 11, x -> 11 ,  
// // Exp A. + ExpB -> 10 + 11

// // ERT
// // Line No. |  a | Exp
// // 13       | 10 | NA
// // 14.      | 11 | 21

let a1 = 10;
console.log(a1++ + ++a1);
console.log(a1);

// // A + B
// // ExpA -> 10, a1 -> 11
// // +
// // ExpB -> 12, a1-> 12
// // ExpA. + ExpB ->  10+12 -> 22
// // a1 -> 12



let Y = 10;
console.log('value of y',++Y + ++Y);
console.log(Y);