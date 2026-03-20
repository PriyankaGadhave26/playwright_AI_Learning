let str='Hello world!'
console.log(str.length) // 12 no of char in Str (include space as well)  lrnght start with 1

//access by index
console.log(str[0]) //H index 0 we have H
console.log(str[7]) //o
console.log(str[-7]) // undefined as he doesn't find anything

console.log(str.at (-1)) //! last char str
console.log(str.at (-6)) // w

console.log(str.at (-14)) //undefine

// using CharAT

console.log(str.charAt(0))// H
console.log(str.charAt(-3)) //" empty value "  chat at does not accept negative indexes

console.log("A".charCodeAt(0)); // 65
console.log("Z".charCodeAt(0)); // 90
console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122