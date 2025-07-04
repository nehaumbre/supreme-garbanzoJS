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
  count ++
}
console.table(testScores);
console.log("Total MArks",total);
console.log("No of subjects", count);
console.log("Average is", total/count);


