console.log(null== undefined);
console.log(null===undefined); //(Differentent Data type check)
console.log( null==0);
console.log(null=="");


//lossely equal to (==) operator checks for value equality, but it does not check for data type. It performs type coercion if the operands are of different types. For example, null and undefined are considered equal when using the == operator because they both represent the absence of a value.
console.log(null == undefined); // true

//strictly equal to (===) operator checks for both value and data type equality. It does not perform type coercion. Therefore, null and undefined are not considered equal when using the === operator because they are of different types.
console.log(null === undefined); // false


console.log(5==5); // true
console.log(5===5.0); // true
console.log(5==="5.0");
console.log(5=="5.0"); // true



