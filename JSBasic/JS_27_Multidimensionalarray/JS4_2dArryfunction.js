let score=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let sumofrow= score.map(row => row.reduce((a,b) => a+b),0);
console.log(sumofrow); // [6, 15, 24]

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if(suiteResults[i][j].includes('fail')){
        console.log(suiteResults[i][j]); // filter-fail, checkout-fail, payment-fail
    }
}
}