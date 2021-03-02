// Here's an example of using destructuring for function arguments

const FAVORITE_COFFEE = {
  beans: 'Brazillian',
  cream: 'Coconut Milk',
  temperatureInF: 110,
  volumeInOz: 12,
}

// declare functional expression using argument destructuring
function orderCoffeeDestructured({ beans, cream, temperatureInF, volumeInOz }) {
  return `I would like to order a ${beans} coffee with ${cream} brewed at ${temperatureInF} and served in a ${volumeInOz}oz cup.`
}

// declare functional expression without destructuring
function orderCoffee(favoriteCoffee) {
  return `I would like to order a ${favoriteCoffee.beans} coffee with ${favoriteCoffee.cream} brewed at ${favoriteCoffee.temperatureInF} and served in a ${favoriteCoffee.volumeInOz}oz cup.`
}

console.log(orderCoffeeDestructured(FAVORITE_COFFEE))
console.log(orderCoffee(FAVORITE_COFFEE))

// As you can see, the result is the exact same, its just that if you're using the arguments multiple times, it might be nice to use destructuring so that you dont have to say ${objectName.propertyName} each time you want to access a prop value.
