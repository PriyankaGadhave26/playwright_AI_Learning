// Slicing and combining
let arr=[1,2,3,4,5];
//slice(start, end)- retrun new array,doesn not mute ->(start ,end-1)

console.log(arr.slice(1,3)); //[ at index of 1=2,  n-1=3-1=2 index of 3 ]
console.log(arr.slice(-2)) //[ 4,5] last 2 no from aaray start from -1 till 2
console.log(arr.slice(2,4));

// don't give end it will go till end
console.log(arr.slice(2)) //[ 3, 4, 5 ] start from 2nd index till end
console.log(arr.slice(0))  //[ 1, 2, 3, 4, 5 ]
console.log(arr.slice(-6)) //[ 1, 2, 3, 4, 5 ]

//concat
let a=[28,78]
let b=[90.67]
let c=a.concat(b,[2,56]);
console.log(c);// [ 28, 78, 90.67, 2, 56 ]
let d=a.concat(b);
console.log(d) //[ 28, 78, 90.67 ]

//spread(modern way)
let h=[...a,...b] //concat only
console.log(h) //[ 28, 78, 90.67 ]


//join 
let s=['pass','fail','skip'].join(',');
console.log(s);//pass,fail,skip concert array into string with  separator

let l=['pass','fail','skip'].join('=');
console.log(l);//pass=fail=skip

let k=['pass','fail','skip'].join('|');
console.log(k); //pass|fail|skip