// Variable - Nammed Value that we can change at any time. 

let currentTempF = 88;  // degrees farenheight
console.log(currentTempF);

//This statement does 2 things. It declares the variable currentTempF and assigns it an initial value. 
//Then when we change it, we don't use let again.

currentTempF = 89; 

console.log(currentTempF);

// But what happens when we declare a variable without assigning it a value? 

let idealTempF;
console.log(idealTempF);

// we get, undefined. 

// we can also declare multiple variables with a single let statement as so:
let bestTempF = 75, worstTempF = 32; 