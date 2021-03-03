// this very line exists in global scope
// think of this as a christmas tree shape

let userName = 'bill' // global variable
let deviceOS = 'iOS' // global variable

function status() {
  let thisFunctionName = 'status' // local variable
  console.log(
    `${thisFunctionName}: ${userName} is using ${deviceOS} operating system`
  )
}

status()
console.log(thisFunctionName) // throws error because violating rules of scope
