let isPresent = true, isDisplayed = true, isEnabled = false;
if(isPresent===true && isDisplayed===true && isEnabled===true)
{
    console.log('Status:READY ')
    console.log('Severity:ok(all good)')
}
else if(isPresent===true && isDisplayed===true && isEnabled===false)
{
    console.log('Status:DISABLED (present+displayed but not enabled') 
    console.log('Severity:Element is visible but disabled.')
}
else if (isPresent===true &&isDisplayed===false)
{
    console.log('status:HIDDEN (present but not displayed)')
    console.log('severity:Element is persent but not visible')
}
else if(isPresent===false)
{
 console.log('status:NOT FOUND (not present)')
    console.log('severity:CRITICAL (not present)')
}