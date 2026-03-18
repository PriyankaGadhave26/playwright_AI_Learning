console.log(5!='5'); // false, because '5' is converted to 5 before comparison
console.log(5=='5'); // true, because '5' is converted to 5 before comparison
console.log(5!=='5'); // true, because they are of different types (number vs string)
// let x = 10;
// x -= 3; // x = x-3;
// console.log(x);

// Compasion Operator (will always result in the boolean, true or false)

// =, ==, ===

// = -> Assignment opearator
// == -> losse comparsion ( sikh vs hindu )
// === -> strict comparsion ( sikh vs hindu , languge, living)

// > , < , >= , <= , !, !== , 

console.log(3 > 4);
console.log(3 < 4);
console.log(4 >= 4); // 4 > 4 or 4===4 , or gate
console.log(3 <= 4);

console.log(5 == "5"); // lose couple comparsion
console.log(5 === "5"); // stict not allowed

console.log(5 != "5"); // The != operator performs type coercion before comparison, converting the string "5" to the number 5. Since 5 equals 5, the result is false
console.log(5 !== "5"); // true The !== operator performs strict inequality comparison in JavaScript, checking both value and data type. Here, 5 is a number while "5" is a string, so they differ in type despite matching values. This strict check returns true
//console.log(5 !=== "5"); This doesn't excit

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

// >== Not a valid operator, it should be >=