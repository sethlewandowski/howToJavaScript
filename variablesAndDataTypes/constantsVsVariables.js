// By default, we should always try to use constants in our code.
// Instead of doing something like;

let user;
user = "Seth";
user = "Someone Else";
console.log(user); // Someone Else 

// We can do something like this:

const user1 = "Seth", user2 = "Someone Else";
console.log(`${user1}, ${user2}`);

// So, our rule of thumb should be to use constants. If we really need a variable, we can 
// always go back and change it to a variable. 

// EXCEPTION TO THE RULE!!!!
// The one exception where you always want to use a variable is in control loops.
// Or possibly where something is changing over time like currentTemp

//Otherwise, stick to constants by default. 