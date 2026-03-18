let a = 5; 
let b = a++ + ++a;
// A+B-> exp A->5 a->6
//+
//exp b -->7 a-->7
//5+7 =12
let c = a++ + ++a + ++a + ++a + a++;
// A+B+C+D+F
// exp A->7 a=8
//exp B->9 a=9
//exp C->10  a=10
//exp D->11  a=11
//ExpE ->11 a=12
//7+9+10+11+11

console.log(b);
console.log(a);
console.log(c);