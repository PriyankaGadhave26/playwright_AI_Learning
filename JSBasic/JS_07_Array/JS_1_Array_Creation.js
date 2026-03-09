let u=[] // empty array
let k=[10,20,0,40]  //index=4 0,1,2,3
let m=['apple','banana','oraange']
let pk=[1,'hello',52,'min',90,67,'lkm'] // js Can hold any type

//Creating an array
let broweser=['chrome','firefox','edge']
console.log(broweser.length) //3  length is property
console.log(broweser[0]); //chrome
console.log(broweser[1]); //firefox 
console.log(broweser[2]); // edge
console.log(broweser[3]);  //undefinded

//array construction
let score = new Array(3) //create empty with 0-2 index
let score2= new Array( 4,98,44); //create[4,98,44]
console.log(score2) //[ 4, 98, 44 ]

//Using of function
let test= Array.of(4,89,'hi','test',22)
console.log(test) // [ 4, 89, 'hi', 'test', 22 ]

//using from function
let h=Array.from("priyanka");
console.log(h);

