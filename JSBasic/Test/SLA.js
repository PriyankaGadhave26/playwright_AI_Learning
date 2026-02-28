let responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500;
console.log("total request",responseTimes.length);
let i=0,co=0;
let min=responseTimes[0];
let max=responseTimes[0];


while(i<responseTimes.length)
    {
     if(responseTimes[i]<min)
     {
        min =responseTimes[i];
     }
     if(responseTimes[i]>max)
     {
        max=responseTimes[i]
     }
     if(responseTimes[i] >SLA_LIMIT)
     {
        co++
     }
     i++

}
let evg= (co/responseTimes.length)*100;
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



     
     
     

