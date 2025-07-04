// for in loop
// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object.
// It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}

let person = {
  name: "Zoomie",
  age: 17,
  gender: "Male",
};

for (let key in person) {
  console.log(key, person[key]);
}

let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(index, list[index]);
}

// Iterate over object & log the property and
// the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  console.log(key, object[key]);
}

// Exercise 2
// You are given an object representing a student's test scores.
//  Each property of the object represents the subject name (e.g., "Math", "Science")
// and the value represents the score.
//  Your task is to use the "for...in" loop to calculate
//  and print the average score of the student.

const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

let total = 0;
let count = 0;
for (let scores in testScores) {
  total = total + testScores[scores]; // or use total += scores[subject];
  count++;
}
console.table(testScores);
console.log("Total MArks", total);
console.log("No of subjects", count);
console.log("Average is", total / count);

// for of loop
// The "for...of" loop in JavaScript is a modern iteration statement introduced in ECMAScript 6 (ES6)
//that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more.
//It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys,
// which makes the code more readable and less error-prone.

// for (variable of iterable) {...}

// Here, variable is a variable that represents each value of the iterable during each iteration, and iterable is the iterable object being looped through.
let peoples = ["huxn", "alex", "john", "brad"];
console.table(peoples);
for (let people of peoples) {
  console.log(people);
}
// Iterating over String
const text = "Heeellello";

for (const char of text) {
  console.log(char);
}

// Iterate over "array1" & log the values using for of loop.
const array1 = ["a", "b", "c"];

for (let chars of array1) {
  console.log(chars);
}
