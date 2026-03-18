let frequency = "often", impact = "blocker";

if(typeof frequency!=='string' && typeof impact!=='string')
{
    console.log('not a string');
}
if(frequency!=='often'|| frequency!=='always'|| frequency!=='rarely'|| impact!=='blocker' || impact!=='minor' || impact!=='major')
{
    console.log('provide valid input')
}
if( frequency==='always'&& impact==='blocker' )
{
    console.log('Severity: P0 - Critical: Stop release immediately');
}
else if( frequency==='always'&& impact==='major')
{
    console.log('Severity: P1 - always+major');
}
else if( frequency==='always'&& impact==='minor')
{
    console.log('Severity: P2 - always+minor');
}
else if( frequency==='often'&& impact==='blocker')
{
    console.log('Severity: P1 - often + blocker');
}
else if( frequency==='often'&& impact==='major')
{
    console.log('Severity: P2 - often + major');
}
else if( frequency==='often'&& impact==='minor')
{
    console.log('Severity: P3 - often + minor');
}
else if( frequency==='rarely'&& impact==='blocker')
{
    console.log('Severity: P2 - rarely  + blocker');
}
else if( frequency==='rarely'&& impact==='major')
{
    console.log('Severity: P3- rarely  + major');
}
else if( frequency==='rarely'&& impact==='minor')
{
    console.log('Severity: P4 - rarely  + minor');
}

//Othercode
// let frequency = "always";
// let impact = "blocker";
// let severityMatrix = "";
// let message = "";

// if (frequency === "always" && impact === "blocker") {
//     severityMatrix = "P0";
//     message = "Critical: Stop release immediately";
// }
// else if (frequency === "always" && impact === "major") {
//     severityMatrix = "P1";
//     message = "High: Requires immediate attention";
// }
// else if (frequency === "always" && impact === "minor") {
//     severityMatrix = "P2";
//     message = "Medium: Should be fixed before next release";
// }
// else if (frequency === "often" && impact === "blocker") {
//     severityMatrix = "P1";
//     message = "High: Requires attention";
// }
// else if (frequency === "often" && impact === "major") {
//     severityMatrix = "P2";
//     message = "Medium: Should be fixed before next release";
// }
// else if (frequency === "often" && impact === "minor") {
//     severityMatrix = "P3";
//     message = "Low: Can be fixed in next release";
// }
// else if (frequency === "rarely" && impact === "blocker") {
//     severityMatrix = "P2";
//     message = "Medium: Should be fixed before next release";
// }
// else if (frequency === "rarely" && impact === "major") {
//     severityMatrix = "P3";
//     message = "Low: Can be fixed in next release";
// }
// else if (frequency === "rarely" && impact === "minor") {
//     severityMatrix = "P4";
//     message = "Trivial: Fix if time permits";
// }
// else {
//     severityMatrix = "UNKNOWN";
//     message = "Invalid frequency or impact input";
// }

// console.log(`Bug Title: Checkout page crashes on applying coupon`);
// console.log(`Frequency: ${frequency}`);
// console.log(`Impact: ${impact}`);
// console.log(`Severity: ${severityMatrix} - ${message}`);