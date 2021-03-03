const MANAGERS_SPECIAL = {
  size: 12,
  type: 'Meat Lovers',
  dough: 'Wheat',
  side: 'Ranch',
  price: 14,
}

const SATURDAY_NIGHTS = {
  size: 16,
  type: 'Four Cheese',
  dough: 'White',
  side: 'BBQ',
  price: 19,
}

function orderUp() {
  return `New Order: ${this.size}in ${this.type} pizza on ${this.dough}.`
}

// the first argument to call is the object that you want 'this' bound to
// any remaining arguments become arguments to the function you're calling

console.log(orderUp())
console.log(orderUp.call(SATURDAY_NIGHTS))
console.log(orderUp.call(MANAGERS_SPECIAL))

function priceForCustomer(name) {
  return `Hi ${name}, thanks for your business. You owe ${this.price}`
}

console.log(priceForCustomer.call(MANAGERS_SPECIAL, 'tom'))
