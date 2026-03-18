let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a,b)=> b-a);
console.log(sorted)
console.log("Fastest:", sorted[0]);