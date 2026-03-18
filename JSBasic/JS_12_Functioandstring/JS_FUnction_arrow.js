
//arrow function
 const greet= function (name1)
 {
    return`hello ,${name1}`
 }

 // To create arrow function remove  function keyword, remove return, remove {}
 //Arrow function  work genereally with single line or two line of code
 const greet1 =(name2) => `hello, ${name2}!`;

console.log(greet1("priya"))

const doublet= n=> n*2;
console.log(doublet(10))

const getEnv=() =>'staging'
console.log(getEnv())

const getresult= (score) =>
{
    if(score>70)
    
      return 'pass';
      return 'fail'; 
};
console.log(getresult(67))



