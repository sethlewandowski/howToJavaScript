// bind allows us to permanently associate a value for this with a function.

const MANAGERS_SPECIAL = {
  size: 12,
  type: 'Meat Lovers',
  dough: 'Wheat',
  side: 'Ranch',
  price: 14,
  orderUp() {
    return `New Order: ${this.size}in ${this.type} pizza on ${this.dough}.`
  },
}

const SATURDAY_NIGHTS = {
  size: 16,
  type: 'Four Cheese',
  dough: 'White',
  side: 'BBQ',
  price: 19,
}

console.log(MANAGERS_SPECIAL.orderUp())
const borrowTheMethod = MANAGERS_SPECIAL.orderUp.bind(MANAGERS_SPECIAL)
console.log(borrowTheMethod())
