
// higher order funtion that taked another function as argumnet
function runwithloggin(testfn,testname)
{
    console.log(`starting :${testname}`)
    let result=testfn();
    console.log(`finsih:${testname}:${result}`)
}

function loginTest()
{
    return'pass';
}
function failTest()
{
    return'fail';
}

runwithloggin(loginTest,'LoginTest 1')//starting :LoginTest 1 finsih:LoginTest 1:pass
runwithloggin(failTest,'LoginTest 2' )//starting :LoginTest 2 finsih:LoginTest 2:fail