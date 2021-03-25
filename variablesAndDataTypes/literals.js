// a "Literal" means that you're providing a value directly in the program.
// it's a way to create a value. 

// ?? What's the diff between a literal and identifier ?? 

const MY_NAME = "Seth";

// in the above, MY_NAME is the identifier, and "Seth" is the STRING LITERAL

let currentTempOutside = 67;

// currentTempOutside is the identifier, and 67 is the NUMERIC LITERAL. 

// But what about a more complicated example? 

let studentOfTheMonth = MY_NAME;

// here, we are using an identifier to assign a value to another identifier. 
// so what is the value of studentOfTheMonth? is it "MY_NAME" ? 

console.log(studentOfTheMonth)

// nope, it's "Seth" because js knows that without quotation marks, it's not a literal its an identifier
// so it assings the value of MY_NAME to studentOfTheMonth not literally "MY_NAME";

// so what happens here? 

let teacherOfTheMonth = YOUR_NAME;

// this throws an error because YOUR_NAME is an identifier that doesnt exist. 

console.log(teacherOfTheMonth)