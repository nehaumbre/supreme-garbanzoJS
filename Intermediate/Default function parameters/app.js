// *Default parameters allow you to give function arguments 
// *default values in case they are undefined or not passed.

const getPerson = (name = "Guest", age = 0 ) => ({name,age});
const person1 = getPerson("Suraj", 30);
const person2 = getPerson();
console.log(person1);
console.log(person2);