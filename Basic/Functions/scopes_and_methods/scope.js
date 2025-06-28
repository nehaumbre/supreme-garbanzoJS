// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global

// Global variables are those declared outside of a block.

// Local variables are those declared inside of a block.
let textMessage ="hello"; //Global
console.log(textMessage); 

function showMessage() {
    let textMessage = "Hi!"; //local
    console.log(textMessage); //access local scope
}  
showMessage();


for (let index = 0; index < 6; index++) {
    console.log(index); //local scope access
}

// console.log(index); //global scope  wont work because we access local var outside its scope