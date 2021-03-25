// Arrays //

// Unlike objects, arrays have an order. (element 0 will always come before element 1)
// - Arrays are not fixed in size;
// - Arrays are not homogeneous; individual elements can be of any time;
// - Arrays are zero based. first element is always element 0

const EXAMPLE_ARRAY = ["a", "b", "c"];
console.log(EXAMPLE_ARRAY[1]) // b

console.log(EXAMPLE_ARRAY.length); // 3

console.log(EXAMPLE_ARRAY.indexOf("a")); // 0

EXAMPLE_ARRAY[1] = 0; // ["a", 0, "c"];

//obviously there is much more to be learned about arrays, but that's to come later.