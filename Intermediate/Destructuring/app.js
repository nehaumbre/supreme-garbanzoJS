// --- DESTRUCTURING ---
// **Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// **into separate distinct variables.

//* Array DESTRUCTURING
const foo = ["one", "two"];
const [ONE, TWO, THREE] = foo;

console.log(ONE);
console.log(TWO);
console.log(THREE);

let a, b;

// [a=6, b=0] =[0];
// [a = 6, b = 0] = [];
[a = 6, b = 0] = ["one"];
console.log(a + " " + b);

function f() {
    return [1, 2];
}

[a, b] = f();
console.log(a + " " + b);

function g() {
    return [1, 2, 3];
}

[a, , b] = g(); //*to ignore leave a space
console.log(a + " " + b);

const [c, ...d] = ["onkfgime", "twoww", "thrweee"];
console.log(c);
console.log(d);

// Your task is to use array destructuring to extract the first
// three colors from the colors array and assign them to separate
// variables named color1, color2, and color3.

// After extracting the colors, log each variable's value to the console.
const colors = ["red", "green", "blue", "yellow", "orange"];

const [color1, color2, color3] = colors;
console.log(color1);
console.log(color2);
console.log(color3);

//*object destructuring
let student = { name: "Jun", position: "First", rollNo: 45, grade: "four" };
const { name: fullname, position, rollNo, grade } = student; //*renaming values
console.log(fullname, position, rollNo, grade);

const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA",
};

// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.

const { name, age, country } = person;
console.log(name, age, country);

// function desturcturing
//Function destructuring in JavaScript lets you extract values from objects or arrays directly
//in function parameters, making code simpler and clearer

const person1 = {
    name: "SArah Doe",
    age: 20,
    country: "UAE",
};
function personInfo({ name, age, country }) {
    console.log("-------------");
    console.log(`name : ${name}`);
    console.log(`age : ${age}`);
    console.log(`country : ${country}`);
}
personInfo(person1);

const someone = { name: "Alice", age: 30, job: "Developer" };

function intro({ name, age }) {
    console.log(`hi ${name}! nice to meet you. Happy ${age}!!!`);
}
intro(someone);

// Nested Destructuring

const userProfile = {
  id: 101,
  name: "Sarah",
  contact: {
    email: "sarah@example.com",
    location: {
      city: "San Francisco",
      zip: "94105",
    },
  },
};

const {
    id,
    contact: {
        email,
        location: { city, zip },
    },
} = userProfile;

console.log(
    `Hi Please note my ID ${id}, email ${email} and address ${city} ${zip}`
);

const songs = [
    { name: "Lucky You", singer: "Joyner", duration: 4.34 },
    { name: "Just Like You", singer: "NF", duration: 3.23 },
    { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
    { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
    { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
];

const [, , , , { singer: s, duration: dur }] = songs;
console.log(s, dur);

