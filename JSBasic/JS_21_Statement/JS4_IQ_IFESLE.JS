//true 
if ("hello") console.log("String is truthy"); //In JavaScript, non-empty strings like "hello" are truthy values, so the if condition evaluates to true. The console.log inside the block runs as a result. Only falsy values (empty string "", null, undefined, 0, false, NaN) would skip this block.
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

// false results
if ("") console.log("Won't print");  // "" -> falsy result
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print"); 

let x = 10;
if (x > 5)
    console.log("x is big");