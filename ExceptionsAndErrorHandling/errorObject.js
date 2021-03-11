// JS has a built-in Error object that can be used for any kind of error handling (anticipated or exceptional)

const email = "seth@youtube.com"

const emailValidator = validateEmail(email)
if (emailValidator instanceof Error) {
  console.error(`Error: ${emailValidator.message}`)
} else {
  console.log(`Valid Email: ${emailValidator}`)
}

function validateEmail(email) {
  return email.match(/@/) ? email : new Error(`invalid email: ${email}`)
}
