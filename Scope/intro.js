// Scope

let myName = 'Seth' // global scope

function nowYouSeeMe(name) {
  let yourName = 'Viewer' // local scope & block scoped

  return name.toUpperCase()
}

console.log(nowYouSeeMe('tom'))
console.log(myName)
console.log(yourName) // will be undefined and throw err
