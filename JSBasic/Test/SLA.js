let ResponseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT1 = 500;
console.log("total request",ResponseTimes.length);
let i=0,co=0;
let min=ResponseTimes[0];
let max=ResponseTimes[0];


while(i<ResponseTimes.length)
    {
     if(ResponseTimes[i]<min)
     {
        min =ResponseTimes[i];
     }
     if(ResponseTimes[i]>max)
     {
        max=ResponseTimes[i]
     }
     if(ResponseTimes[i] >SLA_LIMIT1)
     {
        co++
     }
     i++

}
let evg= (co/ResponseTimes.length)*100;
console.log('minimum response time',min,'ms')
console.log('maximum response time',max,'ms')
console.log(' SLA cross',co)
console.log(evg)
if(co>=2)
{
    console.log('Overall Status: ❌ SLA VIOLATED');
}
else{
console.log('Overall Status: no SLa VIOLATED');
}

//Other way
let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let totalRequests = responseTimes.length;
let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let slaBreaches = 0;

while (responseTimes.length > 0) {
    let currentResponse = responseTimes.shift(); // Get the first response time

    // Update min and max response times
    if (currentResponse < minResponse) {
        minResponse = currentResponse;
    }
    if (currentResponse > maxResponse) {
        maxResponse = currentResponse;
    }
    // Check for SLA breach
    if (currentResponse > SLA_LIMIT) {
        slaBreaches++;
    }
}

let breachPercentage = (slaBreaches / totalRequests) * 100;
let overallStatus = slaBreaches > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";

console.log(`Total Requests: ${totalRequests}`);
console.log(`Min Response: ${minResponse}ms`);
console.log(`Max Response: ${maxResponse}ms`);
console.log(`SLA Breaches: ${slaBreaches} (${breachPercentage.toFixed(2)}%)`);
console.log(`Overall Status: ${overallStatus}`);



     
     
     

