// promises NEHas version

//? Summary
//*Promises simplify async code(helps manage callBack hell).
// *They replace deeply nested callbacks.

//*.then() handles success; .catch() handles failure.
//*Useful methods: Promise.all(Waits for all promises to complete (or any to fail)),
//* Promise.race(Resolves or rejects as soon as one promise settles:), Promise.resolve, Promise.reject.

//! States of a Promise
//Pending – Initial state, not settled.

//*Fulfilled – Operation completed successfully (resolve called).

//!Rejected – Operation failed (reject called).

//* let promise = new promise(resolve, reject){
//? async code
//*     if(success){
//*         resolve("sucess value");
//*     } else {
//!         reject("error value");
//*     }
//* }

// Consuming a Promise
// promise
//   .then(function(result) {
//     console.log("Success:", result);
//   })
//   .catch(function(error) {
//     console.log("Error:", error);
//   });

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    //Simulate a network delay
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login Successful");
      } else {
        reject("Invalid Credentials");
      }
    }, 2000);
  });
}

console.log("start");
//Using the promise

loginUser("admin", "14234")
  .then((message) => {
    console.log(message); // Output after 1.5s: Login successful!
  })
  .catch((error) => {
    console.log(error); // Output after 1.5s: Invalid Credentials!
  });

// loginUser returns a Promise.

// Inside the promise, it waits 1.5 seconds to simulate a network request.

// If credentials match, it calls resolve() (success).

// If not, it calls reject() (failure).

// The caller handles the result using .then() and .catch().

console.log("end");
//?OUTPUT:
// Start
// End
// Then: Login successful!  // appears 1.5 seconds later
//?Notice how "End" prints before the login finishes? That’s asynchronous behavior.


//*Let’s rewrite the same login example using async/await.
