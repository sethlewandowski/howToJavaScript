// Methods are simply the name for functions that belong to objects.

const DOG = {
  legs: 4,
  sound: function () {
    return 'Woof!'
  },
  teeth: true,
  nose: true,
  bestFriend: 'man',
}

console.log(`A dog makes this sound - ${DOG.sound}`) // note that this doesn't do what we want. Instead it returns the entire function declaration.

console.log(`A dog makes this sound - ${DOG.sound()}`) // this however, executes our function.

// *** New in ES6 allows us to use shorthand for methods

const CAT = {
  legs: 4,
  sound() {
    return 'Meow!'
  },
  teeth: true,
  nose: true,
}

console.log(`A cat says ${CAT.sound}`)
console.log(`A cat says ${CAT.sound()}`)
