const MY_CAT = {
  name: 'rosie',
  greeting() {
    return `Meow! My name is ${this.name}!`
  },
}

console.log(MY_CAT.greeting())

// remember, methods are functions that are a property of an object.
