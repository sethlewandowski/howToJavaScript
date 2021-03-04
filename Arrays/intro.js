// Arrays, unlike objects, are ORDERED
// They are zero based number indexed
// They are nonhomogeneous
// constructed with square brackets
// All have length property

const ARRAY = [0, 1, 2]

ARRAY[5] = 3

ARRAY.pop()
ARRAY.pop()
console.log(ARRAY)
console.log(ARRAY[3])
