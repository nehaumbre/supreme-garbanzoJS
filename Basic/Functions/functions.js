// Function Declaration
sayHello("zoya") //if we call function before the function is declared the result wont change and we would still get an output
function sayHello(name) {
  console.log(`Hi ${name}`);
}
// sayHello("zoya");
//Function expression
greetings("zaim"); // but here if we declare before we get error "Cannot access 'greetings' before initialization"
const greetings = function (name) {
  console.log(`Hi ${name}`);
};

// greetings("zaim");
