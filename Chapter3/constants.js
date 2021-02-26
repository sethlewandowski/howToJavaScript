// a Constant, new in es6, also holds a value like variables, but the difference is it can't be
//   changed after initalization. 

const MY_NAME = "Seth";
console.log(MY_NAME);
// FYI - It's conventional (but not required) that constants that refer to a specific number or 
// string to be named with all uppercase letters and underscores (I didn't know this!)
// Makes them easy to spot and reminds you not to try to change them. 

// You can also declare multiple constants in one line as we did with variables.

const MY_WIFES_NAME = "Claire", /*DOGS_NAME,*/ BROTHERS_NAME = "Jacob";

console.log(MY_WIFES_NAME);
/*console.log(DOGS_NAME);*/
console.log(BROTHERS_NAME);

// DId you catch the gotcha!? 

// Constants can't be declared without an inital value. we get an error because DOGS_NAME doesn't have an initalizer
