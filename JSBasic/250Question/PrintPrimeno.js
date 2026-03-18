n= 20;
for( let i=2;i<=n;i++)
{
    let isprime=true
    for( let j=2;j*j<=i;j++)
        if(i%j ===0)
        {
            isprime=false;
            break;
        }
        console.log(i)
}