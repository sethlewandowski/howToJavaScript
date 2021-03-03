// kinda a weird example but going to add it anyway

console.log('before block')
{
  const myName = 'seth'
  console.log(`inside block: ${myName}`)
}
console.log(`outside block: ${myName}`) // undefined
