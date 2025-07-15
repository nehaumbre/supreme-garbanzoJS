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

// console.log("start");
//Using the promise

// loginUser("admin", "14234")
//   .then((message) => {
//     console.log(message); // Output after 1.5s: Login successful!
//   })
//   .catch((error) => {
//     console.log(error); // Output after 1.5s: Invalid Credentials!
//   });

// loginUser returns a Promise.

// Inside the promise, it waits 1.5 seconds to simulate a network request.

// If credentials match, it calls resolve() (success).

// If not, it calls reject() (failure).

// The caller handles the result using .then() and .catch().

// console.log("end");
//?OUTPUT:
// Start
// End
// Then: Login successful!  // appears 1.5 seconds later
//?Notice how "End" prints before the login finishes? That’s asynchronous behavior.

//*Let’s rewrite the same login example using async/await.

// *Async function to use await
// async function loginFlow() {
//   console.log("START");
//   try {
//     const result = await loginUser("admin", "1234");
//     console.log("Result:", result);
//   } catch (error) {
//     console.log("Error:", error);
//   }
//   console.log("END");
// }

// loginFlow();

// console.log("Outside the async function, JavaScript keeps running (non-blocking).");
// loginUser still returns a Promise.
// await pauses inside the async function until the promise is resolved or rejected.
// try...catch is used to handle errors, just like .then().catch().
// Outside the async function, JavaScript keeps running (non-blocking).

// async/await is built on top of Promises.

// It simplifies asynchronous code and error handling.

// It doesn’t block the program, just pauses the async function.

// It's especially useful in real-world code (e.g., working with APIs).

// ----------------------------------------------
// Refactor this code to use Promises
// console.log("Start");

// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log("Getting User Name...");
//     callback(name);
//   }, 2000);
// }

// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log("Getting user hobbies...");
//     callback(["Cricket", "Reading", "Dancing"]);
//   }, 2000);
// }

// getUserDataFromDB("HuXn", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });

// console.log("End");
// ----------------------------------------------

console.log("Start challenge");

function getUserHobbies(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`name: ${name}`);
      resolve(name);
    }, 2000);
  });
}

function getUserDataFromDB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Cricket", "Reading", "Dancing"]);
      // reject("Database error");
    }, 2000);
  });
}

// getUserHobbies("Jun")
// .then((name)=> {
//     console.log(name);
//     return getUserDataFromDB(); //returns new promise
// })
// .then((hobby) => console.log(hobby))
// .catch((error) => {
//     console.error("Something went wrong:", error);
//   });

async function getDataFlow() {
  try {
    const userNamefromData = await getUserHobbies("Jun");
    const hobbiesfromData = await getUserDataFromDB();
    console.log(`NAME: ${userNamefromData}`);
    console.log(`HOBBIES:${hobbiesfromData}`);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

getDataFlow();
console.log("End Challenge");
// *OUTPUT in success
// Start challenge
// app.js:162 End Challenge
// app.js:140 name: Jun
// app.js:157 Jun
// app.js:149 Getting user hobbies...
// app.js:160 (3) ['Cricket', 'Reading', 'Dancing']
//! OUTPUT in error
//app.js:163  Something went wrong: Database error

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`User data recieved from server...`);
    }, 4000);
  });
}

async function getUserData() {
  try {
    let userdata = await fetchDataFromServer();
    console.log(userdata);
    console.log("REmaining task is executed here..");
  } catch (error) {
    console.log(error);
  }
}

getUserData();

//* This function:

// Waits for fetchDataFromServer() using await

// Logs the result after it resolves

// Then runs the remaining task

// If an error happens, it’s caught in catch