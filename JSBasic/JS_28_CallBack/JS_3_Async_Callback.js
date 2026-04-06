// Asynchronous callback example

console.log("Test Started");

setTimeout(function()
{
    console.log("Actual test run");
},3000);
console.log("Test Ended");

// Actual test run will be printed after 3 seconds and Test Ended will be printed before that because of asynchronous nature of setTimeout function.