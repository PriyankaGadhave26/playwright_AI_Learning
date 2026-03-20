const nums = [1, 2, 3];
function doubleArray(arr) {
  arr.push(4);
  return arr.map(n => n * 2);
}

const result = doubleArray(nums);
console.log(nums); //[1,2,3,4]
console.log(result);//[2,4,6,8]

function summarize(numbers) {
  let sum = 0;
  numbers.for (n => {
    sum += n;
  });
  return sum / numbers.length;
}
let Avg=summarize(6);
console.log(Avg);


function createCounters() {
  const counters = [];

  for (var i = 0; i < 3; i++) {
    counters.push(function () {
      return i;
    });
  }

  return counters;
}

const [a, b, c] = createCounters();

console.log(a(), b(), c());


const process = (...nums) => nums.filter(n => n % 2 === 0).map(n => n * 2);

const data = [
  { id: 1, tags: ["a", "b"] },
  { id: 2, tags: [] },
  { id: 3, tags: ["c"] },
];

const result1 = data.flatMap(item => item.tags.map(tag => ({ id: item.id, tag })));

console.log(result1);