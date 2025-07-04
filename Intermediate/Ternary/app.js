// The ternary operator in JavaScript is a concise way of writing conditional expressions.
// It is the only JavaScript operator that takes three operands: 
//a condition followed by a question mark (?), an expression to execute if the condition is true, 
//followed by a colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

// if (condition) {
    
// }
// else{

// }

let password = 8;

function passwordChecker(ps){
    // if (ps === 8){
    //     return `strong password`
    // }else{
    //     return `weak password! password should be 8 char.`
    // }
    return ps===8 ? `strong password` : "weak password! password should be 8 char."
}

const res = passwordChecker(password);
console.log(res);


// -------------------------------------
// REFACTOR THIS CODE & USE TERNARY OPERATOR
// check the age to determine the eligibility to vote
let age = 1;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }
let result = age >= 18 ? "You are eligible to vote" :`You are not eligible to vote yet.`;

console.log(result);

// Create a program which checks if number is positive, negative or zero

let number = 1;
let answer = number>= 0 ? (number == 0 ? "number is zero": "number is positive") : "number is negative";
console.log(answer);