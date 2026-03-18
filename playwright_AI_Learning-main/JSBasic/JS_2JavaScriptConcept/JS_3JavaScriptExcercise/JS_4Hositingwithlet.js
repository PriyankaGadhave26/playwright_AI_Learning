
// //console.log(u); // get the rror because of temporal dead zone
// console.log("temp");//Temporally dead zone error
// let u=10;
// console.log(u);

let d="priya";
 if(true){
    //console.log(d); // temparal dead zone error because of let and const variable are not hoisted like var variable. So we cannot access the variable before declaring it. This is called as temporal dead zone in JavaScript. Temporal dead zone is the time between the creation of a variable and its declaration. During this time, the variable is in a "dead" state and cannot be accessed. If you try to access a variable in the temporal dead zone, it will throw a ReferenceError.
    let d="ganpati";
    console.log(d);

 }
