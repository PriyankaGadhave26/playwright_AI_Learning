let  a=16, b=26,c=6;
if ( a===b && b===c )
{
    console.log('equilateral');
}
else if( a===b || b===c|| a===c)
{
    console.log('isoscales');
}
else if( a!==b && b!==c )
{
    console.log('scalene');
}
else
{
    console.log( 'not found');
}
