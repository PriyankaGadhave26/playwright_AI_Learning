const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (input) {
    let num = parseInt(input);
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " is Prime");
    } else {
        console.log(num + " is Not Prime");
    }

    rl.close();
});