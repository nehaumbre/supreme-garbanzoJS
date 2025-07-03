// *Default parameters allow you to give function arguments
// *default values in case they are undefined or not passed.
// *Default Only Applies to undefined
const getPerson = (name = "Guest", age = 0 ) => ({name,age});
const person1 = getPerson("Suraj", 30);
const person2 = getPerson();
console.log(person1);
console.log(person2);

// ---------------------------
// 1. Create a function name (append) it will take 2 parameters (value, array)
// 2. The default value of parameter "array" will be [].

const append = (value, array = []) => {
    array.unshift(value);
    return array;
}
console.log(append(2,));
console.log(append(12,[2,5,6]));


// ----------------------------
// 1. Create function name (multiply) with 2 parameters (a, b) which will multiply the parameters value
// 2. Provide 1 as the default value to parameter "b"

const multiply = (a, b = 1) => {
    return a*b;
}

console.log(multiply(2,5));
console.log(multiply(2,));