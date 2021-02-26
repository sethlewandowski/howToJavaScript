// In JS, values are either primitives or objects.

// PRIMITIVES as literals 

let myAge = 28; // 28 is a primitive and literal value
const MY_NAME = "seth"; // "seth" is a primitive and literal value 

// these primitives (strings and numbers) are IMMUTABLE

// 6 Primitive Types 
// 1. Number
// 2. String
// 3. Boolean
// 4. Null 
// 5. Undefined 
// 6. Symbol

// Immutability doesn't mean that the contents of a variable can't change: 
let message = "hello!";
message = "world!";

// message is initalized with an immutable value of "hello!", then assigned a new immutable value of "world!".

// OBJECTS // 

// In addition to these 6 primitives, there are objects.
// Unlike primitives, objects can take on different forms and values

// 1. Array
// 2. Date
// 3. RegExp
// 4. Map and WeakMap
// 5. Set and WeakSet

// Lastly, the primitive types number, string, and boolean have corresponding object types:
// Number
// String
// Boolean

//these objects doen't actually store a value (that's what the primitive does), but rather provide
// functionality that's related to the corresponding primitive.


// NUMBERS // 

// lets start this discussion with an example.
let surprisinglyLongAnswer = 0.1 + 0.2; 
console.log(surprisinglyLongAnswer); // prints 0.3000000000000004 basically 

// this is an example of how JS like many other programming languages actually approximate numbers.
// JS uses a format called IEEE-764 double precision floating point.

// Js recognizes 4 types of numeric literal:
/* 1. Decimal */ let count = 21.5
/* 2. Binary */ 
/* 3. Hexidecimal */ const blue = 0x0000ff;
/* 4. Octal */ const umask = 0o0022; 

// Even thought all the inputs above are different types of numeric literals,
// they are all stored in JS as "a double".

console.log(`${count} ${blue} ${umask}`)

// Numbers as Objects //
// Remember we said Number can also be an object?
const nan = Number.NaN; // NaN

// STRINGS //
