// -------------------------------------------------------

// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.

// -> Iteration: Map provides built-in methods for easy iteration over its elements.

// The syntax to create a Map is as follows:
// const myMap = new Map();

// You can also initialize a Map with an array of key-value pairs using the Map constructor:
// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
// ]);

// Here, key1, key2, etc., can be any data type, and value1, value2, etc., can be any value associated with the respective keys.

// Map provides various methods for managing and accessing its elements, such as set(), get(), has(), delete(), clear(), and more.

// Map is a powerful data structure in JavaScript, and it provides a flexible and efficient way to manage key-value data with various data types as keys.

// -------------------------------------------------------

const map = new Map();

const key1 = "string";
const key2 = 0;
const key3 = function hello() {
  console.log("Hello");
};
const key4 = { a: 1, b: 2 };
const key5 = [1, 2, 3];

map.set(key1, "Value of key1 ");
map.set(key2, "Value of key2 ");
map.set(key3, "Value of key 3");
map.set(key4, "Value of key4");
map.set(key5, "Value of key5");

console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
// -------------------------------------------------------
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3)); // Error: key3 is a function and cannot be used
console.log(map.get(key4));
console.log(map.get(key5));

console.log(map.delete(key1));
console.log(map.entries());

console.log(map.size);
// -------------------------------------------------------
console.log(map.has(key1)); //false
console.log(map.has(key2)); //true
// -------------------------------------------------------
// console.clear();
for (let [key, val] of map) {
  console.log(key, val);
}
console.log("================");
for (let keys of map.keys()) {
  console.log(keys);
}
console.log("================");
for (let values of map.values()) {
  console.log(values);
}
// -------------------------------------------------------
map.clear(); //clears the map
console.log(map);

// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

const keyOne = "a";
const keyTwo = "b";
const keyThree = "c";

map.set(keyOne, 1);
map.set(keyTwo, 2);
map.set(keyThree, 3);

console.clear();
console.log(map);
console.log(map.get(keyOne));
console.log(map.size);
map.delete(keyTwo);
console.log(map);
console.log(map.size);

// Write a function called countCharacters that takes a string as input and returns a Map that contains each character in the string as a key and the count of occurrences of that character as the value.

// Something like this 👇
// const text = "hello";

// const characterCountMap = countCharacters(text);
// console.log(characterCountMap);

// output
// Map(4) {
//     'h' => 1,
//     'e' => 1,
//     'l' => 2,
//     'o' => 1
//   }
//check/study this code later 
function countCharacters(str) {
  const characterCountMap = new Map();
  for (let char of str) {
    const count = characterCountMap.get(char) || 0;
    characterCountMap.set(char, count + 1);
  }

  return characterCountMap;
}

let countResult = countCharacters("hello");
console.log(countResult);
