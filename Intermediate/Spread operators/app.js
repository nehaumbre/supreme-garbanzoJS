// **The spread operator is a new addition to the set of operators in JavaScript ES6.
// **It takes in an iterable (e.g an array, objects, function arguments) and expands it into individual elements.
// **The spread operator is commonly used to make shallow copies of JS objects.
// **Using this operator makes the code concise and enhances its readability.



//!!functions

function giveMe4(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}
const colors = ["red", "grey", "white", "lilac"];

giveMe4(1, 2, 3, 4);
giveMe4(...colors);


//* combining arrays 
const arr1 = ["one", "two",["zion", {}] ,"three", {name: "tina", age: 30}];//* will get shallow copies
const arr2 = ["twenty", "forty", "fifty"];
const concat = [...arr1,...arr2]
console.log(concat);

  
// *objects

const student1 = {
    name: "Rahul",
    grade: "A",
    subjects: ["Math", "Science", "English"]
};
const student2 = {
    name: "Jiya", //*Overriding object properties
    grade: "B",
    subject: ["Math", "Science", "English"]
}

const students = { ...student1, ...student2 }; //Merging objects

console.log(students);

// Convert string to array:
// [...'hello'] →['h', 'e', 'l', 'l', 'o']

const message = "Password";
const arrMsg = [...message];
console.log(arrMsg);

const emojiStr = "💙💛💙💛💙💛";
const emojiArr = [...emojiStr];

console.log(emojiArr); 

// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

// -----------------------------
// spread operator doing the concat job
let arrr = [1, 2, 3];
let arrr2 = [4, 5];
let arrr3 = [...arrr, ...arrr2];
console.log(arrr3);


const user = {
    name: "Jen",
    age: 22,
  };

const clone = {...user};
console.log(clone);