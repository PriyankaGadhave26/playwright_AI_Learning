let year=1800
if( (year % 4===0 && year%100!==0) || (year % 400===0) )
{
    console.log('leap year')
}
else
{
    console.log('no Leap Year')
}