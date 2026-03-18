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




//Other ConvolverNode
/**
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

Examples:
Input:
isPresent = true, isDisplayed = true, isEnabled = false
Output:
Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.
💡 Explanation:Element is present and displayed but not enabled. Severity is WARNING because it's not fully interactable.
*/

let isPresented = true;
let isDisplay = true;
let isEnableded = false;
let state = "";
let severity = "";
let message = "";
if (isPresented && isDisplay && isEnableded) {
    state = "READY";
    message = "Element is present, visible, and enabled. Ready for interaction.";
}
else if (isPresented && isDisplay && !isEnableded) {
    state = "DISABLED";
    message = "Element is visible but disabled. Wait for enable state or check preconditions.";
}
else if (isPresented && !isDisplay) {
    state = "HIDDEN";
    message = "Element is present but hidden. Check visibility conditions.";
}
else if (!isPresented) {
    state = "NOT PRESENT";
    message = "Element is not present in the DOM. Check if it is rendered correctly.";
}

severity = (!isPresented) ? "CRITICAL" : (!isDisplay || !isEnableded) ? "WARNING" : "OK";

console.log(`Status: ${state} Severity: ${severity} Action: ${message}`);
