const myList =[1, 2, 3];
console.log(myList);
console.log(myList[0]);

// nested arrays
const fruits = ["apple",["orange","tomato"], "banana"];
console.log(fruits[1][0]);

// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

const favSingers = ["LinkinPark", "Owl city", "Adele", "Camila Cabelo", "Miley Cyrus"];
const favNumbers = [2, 5, 8, 9];
let mixedArr = ["string", ["otherarray"], 123, true];
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

