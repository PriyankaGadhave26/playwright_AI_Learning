let a=6,b=5,c=9;
if(a>b && a>c)
{ 
 if (b>c)
    {
        console.log( 'sorted order is ' + a + ',' + b + ',' + c);
    }
 
    else{
    console.log( 'sorted order is ' + a + ',' + c + ',' + b);
 }
}
else if(b>a && b>c)
{
    if(a>c)
    {
        console.log( 'sorted order is ' + b + ',' + a + ',' + c);
    }
    else{
        console.log( 'sorted order is ' + b + ',' + c + ',' + a);
    }
}
else{
    if(a>b)
    {
        console.log( 'sorted order is ' + c + ',' + a + ',' + b);
    }
    else{
        console.log( 'sorted order is ' + c + ',' + b + ',' + a);
    }
}
 
