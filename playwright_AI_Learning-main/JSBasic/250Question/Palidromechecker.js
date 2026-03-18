let n='cut';
let rev='';
console.log(n.length)
for( let i=n.length-1;i>=0;i--)
{
    console.log(n[i]);
    rev=rev+n[i];
}

if(n===rev)
{
    console.log(`is palindrome ${n}`);
}
else
{
    console.log(`not is palindrome ${n}`);
}


//other way
// let n = 'lol';
// let rev = n.split('').reverse().join('');
// console.log(rev);

