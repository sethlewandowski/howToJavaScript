// splice is not slice!
// allows in-place modifications
// first arg is index you want to start modifying
// 2nd arg is number of elements you want to remove (0 if you don't want to remove any)
// remaining args are elements to be added.

const myArray = ['hi', 'my', 'ted']

myArray.splice(2, 0, 'name', 'is')

console.log(myArray)

const myName = myArray.splice(4)
console.log(myName)
