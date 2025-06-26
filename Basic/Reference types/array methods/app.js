let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "watermelon"]
console.log("Length " + fruits.length);
console.log(fruits);

fruits.push("sapota");
fruits.unshift("mulberry");
console.log("pushed fruits " + fruits);

fruits.sort();
console.log("sorted fruits " + fruits);

fruits.pop();
fruits.shift();
console.log("popped fruits " + fruits);

console.log(fruits.includes("cherry"));
console.log(fruits.includes("jam"));
let newfruitArr = fruits.slice(1,9);
console.log("slice fruit" + newfruitArr);

let anotherFruitArr = fruits.splice(1,4);
let anotherFruitArr2 = fruits.splice(0,1);
// array.splice(start, deleteCount, item1, item2, ...)
console.log(anotherFruitArr);
console.log(anotherFruitArr2);
console.log("concat fruits " + anotherFruitArr.concat(anotherFruitArr2));