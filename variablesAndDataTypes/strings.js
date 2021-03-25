let currentTempF = 78;

// Concatenation (pre es6)
const message = "The current temp is " + currentTempF + "\u00b0F";
console.log(message);

// String templates aka string interpolation 

const message2 = `The current temp is ${currentTempF}\u00b0F`;
console.log(message2)

// MULTILINE STRINGS //

const MULTILINE = `line1
line2`;
console.log(MULTILINE)

// for multiline, author recommends string concatenation like this

const AUTHOR_MULTILINE = "line1\n" + "line2\n" + "line3";
console.log(AUTHOR_MULTILINE);


// NUMBERS AS STRINGS //
const RESULT_1 = 3 + '30'; // 330 //  String

const RESULT_2 = 3 * '30'; // 90 // Number