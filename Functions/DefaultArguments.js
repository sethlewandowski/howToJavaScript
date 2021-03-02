// new in es6 is the ability to set default arguments with the functional expression. Normally when default arguments aren't specified, they get a value of undefined.

function pizzaOrder(type, size = 12) {
  return `Making a ${size}in ${type} pizza now! Should be 10 mins.`
}

console.log(pizzaOrder('cheese')) // no second argument passed, use default of 12
console.log(pizzaOrder('pepperoni', 16)) // override default and use 16
