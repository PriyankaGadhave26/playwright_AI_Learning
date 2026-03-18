function run(testname,maxtry=33, delay=100)
{
    console.log( `max try${testname} upto ${maxtry} in ${delay}ms`)
}
//if we don't give ar it will take default value defind in function
run("login");//max trylogin upto 33 in 100ms 
run("checkout",5);//max trycheckout upto 5 in 100ms
run("api",6,800);// max tryapi upto 6 in 800ms