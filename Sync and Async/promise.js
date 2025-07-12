//! Promise
//* it is an object representing the eventual completion or failure of an
//*Asynchronous operation
//! new Promise():
//*A Javascript Promise Object contains both:
//*producing code and calls to the consuming code
//*it is used to deal with Asynchronous operation in Javascript
//? 3 States :
// Pending
//* Fulfilled/ Resolved
//!Rejected
//========
//Initial state , not yet fulfilled or Rejected
//* Promise Completed (.then(), .finally())
//! Promise failed (.then(), .catch(), .finally())

//*SYNTAX:
// new Promise((resolve, reject) => {
//Async Operations
// *resolve(value)
// ! reject(Error)
// });

//* .then()
//? handles successful Outcome of a Promise
//? takes 2 arguments: (onFulfilled, onRejected)
//! catch() : returns a Promise & deals with rejected case only
//*theory Example below 👇
// const promiseObj = new Promise((resolve, reject)=> {
//     let request = false;
//     request == true ? resolve("Request is Successfull😎"): reject("Request Rejected😒");
// })

// .then((value)=> console.log(value));
// .catch((error=>console.log(error)));

//TODO:use npm + Tab for keyboard shortcut of promise

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} Number is even`);
    } else {
      reject(`${number} Number is odd`);
    }
  });
}
const checkNumberisOddorEven = 1; //odd
checkNumber(checkNumberisOddorEven)
  .then((message) => {
    console.log(`YAY! ${message}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

function callBackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside CallBackHell function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} : Processed data 1`;
      console.log("Inside (firstFunction) function");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} : Processed data 2`;
      console.log("Inside (secondFunction) function");
      resolve(processedData);
    }, 2000);
  });
}

callBackHell()
  .then((data) => firstFunction(data))
  .then((processedData1) => secondFunction(processedData1))
  .then((processedData2) => console.log(`Final Result of all functions with
    Promises : ${processedData2}`))
.catch(error => console.log(`error ${error}`))