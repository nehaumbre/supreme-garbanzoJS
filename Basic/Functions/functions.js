// Function Declaration
sayHello("zoya"); //if we call function before the function is declared the result wont change and we would still get an output
function sayHello(name) {
  console.log(`Hi ${name}`);
}
// sayHello("zoya");
//Function expression
// greetings("zaim"); // but here if we declare before we get error "Cannot access 'greetings' before initialization"
const greetings = function (name) {
  console.log(`Hi ${name}`);
};

greetings("zaim");

//when we provide function as an argument to other function it is called callback function

function showCallBackFunc(fn) {
  const value = 10;
  fn(value);
}

showCallBackFunc(function (value) {
  console.log(value);
});

//Another example

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
function callback() {
  console.log("Iam a callback function");
}

// two ways to call a callback function
// greet("sunio", callback);

greet("sunio", function callback() {
  console.log("Iam a callback function");
});

// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn) {
  const value = 100;
  fn(value);
}

function fn(value){
    console.log(value);
}
showCallFunc(fn);


function sayHelo(fni){
    const name = "sania";
    fni(name);
}

function fni(name){
    console.log(`Hi ${name}`)
};

sayHelo(fni);

// One more ex
function calc(add){
    const a = 9;
    const b = 10;
    add(a,b);
}
function add(a,b){
    console.log(a*b);
}

calc(add);