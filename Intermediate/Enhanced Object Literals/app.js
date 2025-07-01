//*Enhanced Object Literals are a feature introduced in ES6
//?? (ECMAScript 2015) that make writing JavaScript objects
//?? more concise and expressive.

//*Shorthand property names

let name = "Jamie";
let age = 30;
//Old way
const user1 = {
  name: name,
  age: age,
};
//Shorthand property names
//If the property name is the same as the variable name, you can omit the value
const user2 = {
  name,
  age,
};
console.log("old way", user1);
console.log("Shorthand property names way", user2);

//*Shorthand method definitions
//?? You can define methods without the function keyword.

const user3 = {
  name: "Bob",
  greet() {
    console.log("Hello", this.name);
  },
};

console.log(user3.greet());

// Computed Property Names
// *You can use variables or expressions as property keys with square brackets.

const property = "score";
const user = {
  name: "Sydney",
  [property]: 45, // **same as score : 45
};

console.log(user);
console.log(property);

//**Object super Method: Call parent object methods using super.

const base = {
  speak() {
    return "hello";
  },
};
const child = {
  __proto__: base,
  speak() {
    return super.speak() + "!, world";
  },
};
console.log(base.speak());
console.log(child.speak());

// more example
function employee(name, age, work) {
  return {
    name: name,
    age: age,
    work: work,
    intro: () => {
      console.log(
        `hi im ${name} and im ${age} years old and my profession is ${work}`
      );
    },
  };
}

const HUNX = employee("HUNX", 27, "Developer");
const Aklex = employee("Aklex", 37, "UI/UX");
console.log(HUNX);
console.log(Aklex); // with this u can create multiple objects using same function
console.log(Aklex.intro());

// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

const a = 1;
const b = 2;
const c = 3;
const obj = {
  a,
  b,
  c,
};
console.log(obj);

// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6

const lib = {
  sum: (a, b) => a + b, //using arrow function
  mult(a, b) {
    return a * b; // removing functio keyword
  },
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

// function getPersonES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersonES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }

//  getPersonES6 = (name, age, height) => {
//     return {
//         name, age,
//         height
//     };
// }

// const getPersonES6 = (name, age, height) => ({
//   name,
//   age,
//   height,
// });

const getPersonES6 = (name, age, height) => ({ name, age, height });


console.log(getPersonES6("Zachary", 23, 195));
// Expected output: { name: 'Zachary', age: 23, height: 195 }
