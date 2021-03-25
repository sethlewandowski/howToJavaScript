// Var, Let, Const

// Ever since es6, we don't really use var anymore. That's old school js right there and can lead to many issues.
// Now, we either use const or let with the prefernce to use const everywhere unless you NEED the variable to CHANGE.

// let's get verbose real quick
// This is how we declare a variable
let myName

// this is how we initialize a variable
myName = 'seth'

// but we can and most of the time probably do do (haha) all that simultaneously
const myAge = 28

// this is all good all kosher.
//BUT!!!!
// Let's make some changes and see what happens.
// I just had a birthday and need to update my age
//myAge = 29 // throws error  -> "assignment to constant variable"

// Interestingly enough, we can do something like this
myName = 29 // all good

// It makes no sense but it runs smoothly, hence, creating a good example of best practice to minimize the use of let and instead use const when and where possible.

// ABSOLUTE MINIMUM TAKEAWAY

//1. Don't use var.
//2. Use const everwhere (one and done)
//3. Use let only where you need to change a variable (can reassign values and even change types!)
