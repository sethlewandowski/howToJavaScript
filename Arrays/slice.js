// if you want to get a subarray from an array, use slice.
// slice takes UP TO 2 arguments
// RETURNS A NEW ARRAY
// first is where subarray begins, and second is where it ends (doesn't include)

const exampleArray = [0, 1, 2, 3, 4, 5]

console.log(exampleArray.slice(2)) // new array created and returned

console.log(exampleArray) // original array unmodified

const editedArray = exampleArray.slice(1)

console.log(editedArray)

const arrayMinusLastItem = exampleArray.slice(0, -1)
console.log(arrayMinusLastItem)
