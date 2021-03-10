// filter creates a new array with all elements that pass the provided function

const userList = [
  { name: "seth", age: 22 },
  { name: "ted", age: 55 },
  { name: "bill", age: 12 },
]

const canDrink = userList.filter((x) => x.age > 21)
console.log(canDrink)
