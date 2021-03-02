// Function - self contained collection of statements that run as a single unit. 
// in JS, functions are objects. 

// function nameOfFunction(){
    // function body goes here
//}

// declare the function
function sayHello(name){
    console.log(`Hi, ${name}!`);
}
// call (aka. run, execute, invoke, dispatch) the function and pass it the argument
sayHello('seth');

// note the above function returns undefined. 
console.log(sayHello()) // undefined because it doesn't return anything

// CALLING VS REFERENCING 
// When you follow a function with a parenthesis, you call it
//  functionName()
// When you simply state a function name, you reference it.
// functionName;

// Here's an example of using a reference then calling it by it's new name.
const F_NAME = sayHello; // simple reference

// but now we can invoke the function by a different name. Same function, two names we can use
F_NAME('F_NAME') // Hi, F_NAME!
sayHello('sayHello') // Hi, sayHello!