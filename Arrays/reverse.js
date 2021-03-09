// reverses the order of the array in place
// Array.prototype.reverse()
// mutates original array! doesn't return anything
// returns result and mutuates original array

const myArr = [3, 2, 1]

const orderedArr = myArr.reverse() // mutate original and assign to new
console.log(myArr) // mutated original
console.log(`ordered: ${orderedArr}`) // new