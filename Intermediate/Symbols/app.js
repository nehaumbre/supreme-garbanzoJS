// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). 
//A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique.
// When you create a symbol, it is unique and cannot be recreated or changed. 
//This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

const mySymbol = Symbol();
console.log(typeof(mySymbol));
// Output: symbol

const mySymbol1 = Symbol("my Custom Symbol");
console.log(mySymbol1);

//Comparing Symbols
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym1 === sym2);
// Output: false why?: value is always unique
// Symbols are not equal even if they have the same string representation.

const obj = {};
obj[sym1] = "Value1";
obj[sym2] = "Value2";
console.log(obj);


const Symbol1 = Symbol("Film");
const Symbol2 = Symbol("Film");

const theatre = {}
theatre.time = "4am-8am"
theatre.Totalseats= 30
theatre.bookedSeats = 13
theatre["genre"] = "Slice of Life"
theatre["genre"] = "Youth"
theatre[Symbol1] = "Movie1: ZNHD"
theatre[Symbol2] = "Movie2: YJHD"
console.table(theatre);
for (let index in theatre) {
    console.log(`key is: ${index}| value is: ${theatre[index]}`)
}
console.log("------------------------------------------------")
let SYMBOL = Symbol("foo");
console.log("type is: " + typeof(SYMBOL));
let object = {
    firstName : "Jun",
    lastName : "Lee",
};
object[SYMBOL] = "bar";
// console.log(object);
console.log(object);
for (let index in object){
    console.log("element is :",index);
    console.log("value is :",object[index]);
}
