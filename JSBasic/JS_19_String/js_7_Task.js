let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging"));// ture

console.log(url.startsWith("https"));//true

console.log(url.endsWith("/dashboard"));//ture


let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500"; 

let status = log.match(/Status: (\d+)/)[1];//(\d+) captures → "500"?.[1] safely extracts it
console.log(status) //500
let statusw = log.match(/Status: (\d+)/)  //this will take all the value
console.log(statusw) ;//[ 'Status: 500', '500',index: 37,input: '[ERROR] 2024-03-07 TestCase: login - Status: 500',groups: undefined]


let env = "staging"; 
let module1 = "auth"; 
let count = 7; 

let testId = `${env}_${module1}_${String(count).padStart(3, "0")}`;
console.log(testId);

 let actual = " PASS "; 
 let expected = "pass"; 
 console.log(actual.trim())
 console.log(actual.trim().toLowerCase() === expected); //false


 let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
 let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
 console.log(params) //{ query: 'login', page: '2', sort: 'asc' }


 let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");

console.log(masked) //Bearer ***REDACTED***