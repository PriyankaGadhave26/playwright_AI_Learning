function  add( a,b,c)
{
    return a+b+c;
}
let num=[1,2,3]

console.log(add(...num) )// 6

function haserror(...codes)
{
    return codes.some(co=> co>=400);
}

let Responsecode=[404,202,200]
 console.log(haserror(...Responsecode))
