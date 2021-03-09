// es6 array method
// array.prototype.fill()
// set any number of elements with a fixed value
// first arg is value to fill
// second is start index
// third is end index

const myArr = new Array(10).fill('Hi')

console.log(myArr) // shows new constructed array

myArr.fill("Hi Mom") // replaces all values with "hi mom"
console.log(myArr)

myArr.fill("Hi Dad", 1, 2)
console.log(myArr)