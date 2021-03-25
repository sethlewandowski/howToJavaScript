// Objects //

// unlike immutable primitive types, which only represent one value, objects can represent multiple
// or complex values, and can change over their lifetime. 

// In essence, an object is a container and it's contents can change over time. 
// same object, different contents. 

// the contents of an object are called properties (or members);

// properties consist of a name (or key) and value
// property names must be strings or symbols. 
// property values can be any type (including other objects)

const Person = {
    name: "Seth",
    age: 28,
    bike: 
        {
            name: "Bruce",
            brand: "Giant",
            color: "black",
            year: 2019
        }
}

Person.favoriteColor = 'black'; // add property after initalization.
console.log(Person);

// Accessing values from the object Seth

console.log(Person.name); // Seth
console.log(Person["name"]) // Seth
console.log(Person["bike"].brand); // Giant

// Objects can have functions as property values

Person.sound = function() {return "I speak english, actually!"}
console.log(Person.sound()); // I speak english, actually!

// Finally, let's just say I don't want people to know my age anymore

delete Person.age;

console.log(Person); // returns Person without age property