//!!Template strings (or template literals) in JavaScript 
//** use backticks (`) instead of quotes. 
//**They let you add variables and expressions directly inside the string.


let firstName = "Georgia";
let lastName = "Miller";

function address() {
    return "Wellsburry Street";
}

console.log(`Hi my name is ${firstName} ${lastName} and my address is ${address()}`);

// 1. Store this in template string ~
// The quick
// brown fox
// jumps over
// the lazy dog

// 2. Create two variables (firstName, lastName)
// 3. Use that variables in template string.

let poem = `The quick
            brown fox
            jumps over
            the lazy dog`

console.log(`She sang..${poem}...
             happily`);