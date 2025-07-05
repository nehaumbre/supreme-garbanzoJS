console.clear();

// -------------------------------------------------
// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. 
//Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. 
//Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.
const initialValues = [1,2,3,3];
// const mySet = new Set(); // empty set
const mySet = new Set(initialValues);
console.log(mySet); // only unique values allowed

mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("banana")
console.log(mySet); // only unique values allowed
// -------------------------------------------------
console.log(mySet.has("banana"));
console.log(mySet.has("pear"));
// -------------------------------------------------
mySet.delete(2);
console.log(mySet);

console.log(mySet.entries());
// -------------------------------------------------
for (let item of mySet){
    console.warn(item);
}

// -------------------------------------------------

const letters = new Set();
letters.add('a');
letters.add('b');
letters.add('c');

for (let char of letters){
    console.log(char);
}
// mySet.clear();
// console.log(mySet);
