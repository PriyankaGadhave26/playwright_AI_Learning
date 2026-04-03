//What is an object in JavaScript?
//An object is a collection of related data and/or functionality. The keys (labels) are strings, and the values can be anything: strings, numbers, arrays, or even other functions (called methods).
  const laptop = {
  brand: "lenovo",
  model: "lcq",
  is5G: true,
  generation:"i7gen"
  };

  //How do you access object properties?
//There are two ways to get data out of an object: Dot Notation and Bracket Notation.
// Difference between dot and bracket notation
// --Dot Notation is static. You must type the exact name of the property.
//   Bracket Notation is dynamic. You can use a variable inside the brackets to decide which property to access at runtime.

  console.log(laptop.brand); 
    const  property = "brand";   // "lenovo"
  console.log(laptop[property]);  //lenovo

//   How to add and delete properties?
//  Objects are mutable, meaning you can change them after they are created.
//   Add/Update: Just assign a value to a new or existing key.
//   Delete: Use the delete keyword.

laptop.color='grey';
console.log(laptop); // { brand: 'lenovo', model: 'lcq', is5G: true, generation: 'i7gen', color: 'grey' }

//to delete a property
delete laptop.is5G
console.log(laptop); // { brand: 'lenovo', model: 'lcq', generation: 'i7gen' }

//How to check if a property exists?
//To avoid "undefined" errors, you can check if a key exists using the in operator or .hasOwnProperty().

laptop.hasOwnProperty('model'); // true
console.log('model' in laptop); // true name of key is in the object or not

// What is Object.keys()?
// Object.keys(obj): Returns an array of all the keys.
// [ 'brand', 'model', 'generation', 'color' ]
    console.log(Object.keys(laptop)); // [ 'brand', 'model', 'generation', 'color' ]


// What is Object.values()?
// Object.values(obj): Returns an array of all the values.
//   Result:[ 'lenovo', 'lcq', 'i7gen', 'grey' ]
   console.log(Object.values(laptop));


// What is Object.entries()?
// Object.entries(obj): Returns an array of [key, value] pairs (nested arrays).
//   Result:
 console.log(Object.entries(laptop)); // [ [ 'brand', 'lenovo' ], [ 'model', 'lcq' ], [ 'generation', 'i7gen' ], [ 'color', 'grey' ] ]



// How to loop through an object?
for (let key in laptop) {
  console.log(`${key}: ${laptop[key]}`); // brand: lenovo, model: lcq, generation: i7gen, color: grey
}
