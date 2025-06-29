//** Arrow functions(or fat arrow functions) 
// are a shorter way to write functions in JavaScript.
// Introduced in ES6, they use a simpler syntax 
// than regular function expressions.

function addd(a, b) {
    return a + b;
}

const add = (a, b) => a + b;

console.log(add(3, 5));


//**Arrow function with one parameter */
const x = x => x * x;
console.log(x(3));

//**Arrow function with no parameters */
// !!Arrow functions do not have their own this
const sayHello = () => console.log("hello");

console.log(sayHello());

function greeet(username) {
    return `hi! ${username}`
}
console.log(greeet("kyle"));

const greet = username => { return `hi ${username}`; }
console.log(greeet("Kariana"));


// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
        setTimeout(() => {
            console.log("Namaste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => {
                    console.log("Bonjour");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);