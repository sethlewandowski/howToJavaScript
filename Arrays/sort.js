// Array.prototype.sort()
// sorts array elements in place and returns sorted array

const myArr = [0, 4, 2, 1, 1000]

console.log(myArr.sort())

console.log(myArr.sort((a,b) => a-b))