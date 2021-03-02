// Here's a function declaration

function orderPizza(type, size) {
  return `Hi I'd like to order a ${size}in ${type} pizza please.`
}

// But you can also create a functional expression

const ORDER_PIZZA = function (type, size) {
  return `Hi I'd like to order a ${size}in ${type} pizza please.`
}

console.log(orderPizza('pepperoni', 12))
console.log(ORDER_PIZZA('cheese', 16))
