// Scope

let myName = 'Seth'

function nowYouSeeMe(name) {
  let yourName = 'Viewer'

  return name.toUpperCase()
}

console.log(nowYouSeeMe('tom'))
console.log(myName)
console.log(yourName) // will be undefined and throw err
