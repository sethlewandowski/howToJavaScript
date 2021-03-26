// I'll be honest, until I was reading an intro to js book, I had never heard of getters or setters. And that's after a full year of programming js almost daily.
// Either way, let's cut to the chase.

// we know how we can assign functions to object properties, right?

const Person = {
  name: 'seth',
  sayHi() {
    return 'hi!'
  },
}

console.log(Person.sayHi())

// well that's easy, but what about some built in validation for changing and assigning values to object properties?
// that's where getters and setters come in!

const Dog = {
  name: 'Moe',
  sound: '',
  set greeting(sound) {
    if (sound === 'woof' || sound === 'bark') {
      this.sound = sound
    } else {
      console.log('not an accepted dog sound, sorry!')
    }
  },
  get greeting() {
    return this.sound
  },
}

// Dog.greeting = 'wo'   will throw err
Dog.greeting = 'woof' // all gravy // this will run through the set greeting method
console.log(Dog.greeting) // this calls the get greeting method
