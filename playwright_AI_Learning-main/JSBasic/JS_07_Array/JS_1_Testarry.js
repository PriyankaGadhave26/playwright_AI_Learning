let responses = [200, 201, 404, 500, 404, 200, 503];

//Check if ALL responses are successful (200–299)
let m=responses.every(c=>c<300)
console.log(m) //false

//Find the FIRST non-success code
let d= responses.sort((a,b) =>  a-b)
console.log(d)
 let fisterror=d.find( x=> x>400);
 console.log(fisterror) // 404

 //Return all unique error codes
let errorCodes = responses.filter(code => code < 200 || code >= 300);
console.log("Unique error codes:", errorCodes);
let uniqueErrorCodesSet = new Set(errorCodes);
console.log("Unique error codes:", Array.from(uniqueErrorCodesSet));