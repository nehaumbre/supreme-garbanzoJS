// & The rest parameter syntax allows
// & a function to accept an indefinite number of arguments
// & as an array, providing a way to represent variadic functions in JavaScript.
//*A variadic function is a function that accepts any number of arguments 
// *— not just a fixed number

function user(x, ...userData) {
    console.log(`${userData} and ${x}`);
}
console.log(user("BRICK", 19, "football", "Piano"));

function InterviewIntro(firstName, lastname, ...food) {
    console.log(`hi im ${firstName} ${lastname} and i like ${food}`);
}
InterviewIntro("Skye", "Jun", "Pizza", "churros", "Chicken");


// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!
function sum(...args) {
    var total = 0;
    for (i = 0; i < args.length; i++) {
        total += arguments[i]; //*total = total + arguments[i]
    }
    return total;
}

const res = sum(1, 2, 3, 4, 5, 6);
console.log(res);

function addSum(...arguments) {
    return arguments.reduce((prev, curr) => {
        return prev + curr;
    })
}

console.log(addSum(1,2,3));