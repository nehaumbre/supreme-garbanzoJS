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