let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let passcount=0, failcount=0,skipcount=0;
for(let i=0;i<testResults.length;i++)
{
    
  if(testResults[i] ==='pass')
  {
    passcount++;
  }
   else if(testResults[i] ==='fail')
   {
    failcount++
   }
   else if(testResults[i] ==='skip')
   {
    skipcount++
   }
   else
   {
    console.log("not found status");
   }
  
}
console.log('total test',testResults.length)
console.log('total pass',passcount);
console.log('total fail ',failcount);
console.log('total test  skip',skipcount);
let per=(passcount/testResults.length)*100;
console.log('pass%',per)

if(passcount===testResults.length)
{
    console.log("VERDICT:ready for release")
}
else if(failcount<=2)
{
    console.log("VERDICT:review before release")
}
else if( failcount>=2){
  console.log("VERDICT:block release")
}
