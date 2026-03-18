var a=10; // global variable

// defination of function
function test(){
    var a=20; // local variable with same name as global variable
    console.log(a);
    if(true){
        var a=30; 
    }
    console.log("d",a); 
    // this will change the value of local variable 'a' to 30
}

//calling the function
test();

let b=20; // global variable

function test2(){
    let b=50;
    console.log(b);
    if(true){
        let b=100;
    }
    console.log("l",b);
    // this will not change the value of local variable 'b' to 100 because 'let' has block scope
}   
test2();

const c=30; // global variable
console.log(c);
