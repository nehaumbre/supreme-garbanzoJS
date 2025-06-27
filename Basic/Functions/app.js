
function sayHello(name){
    console.log(`hello! ${name}`); // new way to include a variable to print
}

sayHello("CAMILA");

// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(num1, num2) {
    // console.log(num1*num2);
    return num1*num2;
}

let result = myFunction(20,30);
console.log(result);