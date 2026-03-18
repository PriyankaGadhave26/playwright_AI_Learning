// Callback Functions
//A callback is a function passed as an argument to another function, to be called later.



function runTest(testName, callback) {
    let result = "pass";
    // 100 lines
    callback(testName, result)
}

function onComplete(name, result) {
    console.log(`${name} finished with: ${result}`);
}

runTest("loginTest", onComplete)



function pramod_doing_work(worker, callback) {
    console.log("Started the class PW")
    let work = worker;

    // dasdasdasdsadasdsadas
    console.log("Finished the class PW")
    callback();
}

function callWife() {
    console.log("Call wife when done");
}

pramod_doing_work('PW class', callWife);