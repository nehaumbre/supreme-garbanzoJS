// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

let thing = ["car", "book", "chair"];
let name = ["Alice", "Bob", "Charlie"];
console.log(thing.concat(name));

console.log(name.includes("Bob"));
console.log(name.includes("book"));


console.log(thing.pop());
console.log(thing);
console.log(thing.shift());
console.log(thing);

console.log(thing.push("areem"));
console.log(thing);
console.log(thing.unshift("Joe"));
console.log(thing);



let color = ["red", "blue", "green","purple", "orange", "pink"];
console.log(color.sort());
console.log(color.slice(1,4));
console.log(color.splice(1,3));


const months = ["Jan", "March", "April", "June"];
console.log(months);
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
months.splice(4,1,"May")
console.log(months);

let vehicles = ["van", "bike", "car", "truck"];
console.log(vehicles.join('.'));
console.log(vehicles.reverse());

let number = [12,21,32,14,5];
console.log(number.sort());