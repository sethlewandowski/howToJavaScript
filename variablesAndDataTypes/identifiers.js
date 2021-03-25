// Variable, constant, and function names are called identifiers and they have naming rules.

// 1. must start with a letter, $, or _
// 2. must consist of letters, numbers, $, or _
// 3. Unicode characters are allowed (pie symbol for example)
// 4. Can't be a reserved word (like let or const)

//let let = "let"  // nope; throws error saying "let is disallowed as a lexically bound name"

// while there is no single convention for js identifiers, the two most common are:

// 1. Camel Case

let iLiveOnCamelbackMountain = "Lucky Person";

// 2. Snake Case (less popular)

let i_live_under_a_rock = "possibly a rattle snake?"

// Other suggestions as it pertains to identifiers:

// 5. identifiers shouldn't start with a capital letter (except for classes)
// 6. often, identifiers that start with one or two underscores are used to represent special or 'internal' variables;
// 7. if you're using jQuery, identifiers that start with $ conventionally refer to jQuery wrapped objects