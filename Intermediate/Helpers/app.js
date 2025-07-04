//for each helper
////////////////////////////////////////////////
// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens

let colors = ["teal", "blue", "red", "green"];

colors.forEach((color) => console.log(color));
// Output: teal, blue, red, green

const words = ["hello", "bird", "table", "football", "pipe", "code"];

words.forEach((word) => {
  console.log(word[0].toUpperCase() + word.substring(1));
});

let nombers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total,current) => total + current, 0);
// // 0 = initial value for total, total = (holds the running total)
// //current = current number in the array
let summ = 0;
nombers.forEach((nomber) => {
  summ += nomber; //   sum = sum + number;
});
console.log(summ);

// 1. Create an array of numbers.
let numbers = [1, 2, 3, 4, 5];

// 2. Create a variable to hold the sum.
let sum = 0;

// 3. Create the adder function which takes the parameter of number & add that with sum variable.
function adder(number) {
  sum += number;
}

// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
numbers.forEach(adder);

// 5. print the sum variable.
console.log(sum);

// The map() method creates a 'new array' populated with the results
// of calling a provided function on every element in the calling array.

let integers = [1, 2, 3, 4, 5];

let double = integers.map((integer) => integer * 2);
console.log(double);
//-----------------------------------------

let peoples = [
  { firstName: "Macom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const results = peoples.map((people) => {
  return people.firstName + " " + people.lastName;
});
console.log(results);

const randomNo = [10, 2, 3, 4, 5];

const multiplyBy10 = randomNo.map((num) => num * 10);
console.log(multiplyBy10);

// The filter() method is a built-in array method in JavaScript
//that allows you to create a new array containing elements that pass a certain condition.
//It provides a clean and concise way to filter out elements from an array based on a specified criteria.

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

console.log(songs.filter((song) => song.duration < 3));

const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];

console.log(computers.filter((computer) => computer.ram > 8));

const ages = [12, 4, 56, 78, 23, 14];
console.log(ages.filter((age) => age > 18));

//---------------------------------------
const woords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

console.log(woords.filter((word) => word.length > 6));
//---------------------------------------

//Every and some
//////////////////////////////////////////
// The every() and some() are two built-in array methods in JavaScript that allow you to check the elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of the array.

// The every() method tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if any element fails the condition.

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element, and false if no element passes the condition.

//////////////////////////////////////////

const peooples = ["huxn", "jordan", "alex"];
console.log(peooples.every((peoople) => peoople.length > 4)); //false
console.log(peooples.every((peoople) => peoople.length > 3)); //true
console.log(peooples.some((peoople) => peoople.length > 4)); //true
console.log(peooples.some((peoople) => peoople.length < 4)); //false

const ganey = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

console.log(ganey.every((gana) => gana.duration > 2)); //false
console.log(ganey.some((gana) => gana.duration > 2)); //true

// ---------------------------

// ---------------------------
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// do all products have a category of Books
// let allProductsBooks = products.every(function (product) {
//   return product.category === "Books";
// });

// do any products have a category of Books
// let someProductsBooks = products.some(function (product) {
//   return product.category === "Books";
// });

// console.log(allProductsBooks);
// console.log(someProductsBooks);
// ---------------------------

let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];
// do all products have a category of Books
let isCategoryBooksall = products.every(
  (product) => product.category === "Books"
);
console.log(`do all products have a category of Books: ${isCategoryBooksall}`);

// do any products have a category of Books
let isCategoryBooksAny = products.some(
  (product) => product.category === "Books"
);
console.log(`do any products have a category of Books: ${isCategoryBooksAny}`);

//find
// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition.
//It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

// ------------------------------
const persons = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];

console.log(persons.find((person) => person.name === "alex"));

// only works for the first found item
const posts = [
  { id: 1, content: "Good Post" },
  { id: 1, content: "funny Post" },
  { id: 1, content: "sad Post" },
  { id: 4, content: "funny Post" },
];

console.log(posts.find((post) => post.content === "funny Post"));

const Ages = [12, 13, 17, 34, 40];
console.log(Ages.find((age) => age > 18));

// -------------------------------
// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);


let things = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];
console.log(things.find((thing)=> thing.category === "Books"))