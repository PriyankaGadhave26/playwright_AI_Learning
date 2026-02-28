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
