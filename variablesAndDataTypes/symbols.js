// SYMBOLS //

// new in es6 are symbols - a new data type representing unique tokens

// Symbols are created with the Symbol() constructor
// you can optionally provide a description, which is just for convenience.

const RED = Symbol();
console.log(RED) // Symbol()

const BLUE = Symbol();
console.log(BLUE); // Symbol()

// so both are just Symbol() but here's the catch

console.log(RED === BLUE); // false