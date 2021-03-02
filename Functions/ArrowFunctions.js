// Thanks, Es6! We now have arrow functions!!!

// Purpose - simplify your code:
// 1. omit the word 'function'
// 2. if function takes a single argument (many do), omit the parenthesis ()
// 3. if body is a single expression, omit the curly braces and return statement
// 4. they are always anonymous

// this is a functional expression, using arrow syntax, no return, no curly braces
const SHOW_ME_THE_MONEY = (name) => `Here's the $$$$, ${name}!`

// equalivent long form expression
const SHOW_YOU_THE_MONEY = function (name) {
  return `Here's the $$$$ again, ${name}!!!`
}

console.log(SHOW_ME_THE_MONEY('Ted'))
console.log(SHOW_YOU_THE_MONEY('Bill'))
