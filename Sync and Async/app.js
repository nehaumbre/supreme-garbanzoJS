// ********** Synchronous Code
function Episode() {
  return "Play episode";
}

console.log("Intro");
console.log(Episode());
console.log("Outro");

// ********** Asynchronous Code
console.log("Intro");

// setTimeout(() => {
//   console.log(`play Episode`);
// }, 2000);

console.log("Outro");

console.clear();
// CallBack Hell

function callBackHell(callBack) {
  setTimeout(() => {
    const data = "Inside (callBackHell) function";
    console.log(data);
    callBack(data);
  }, 2000);
}

function firstFunc(data, callBack) {
  setTimeout(() => {
    const processedData = `${data}- Processed first`;
    console.log(`Inside (firstFunc) function`);
    callBack(processedData);
  }, 2000);
}

function secondFunc(data, callBack) {
  setTimeout(() => {
    const processedData = `${data}- Processed second`;
    console.log(`Inside (secondFunc) function`);
    callBack(processedData);
  }, 2000);
}

//the hell:

// callBackHell((data)=> {
//     firstFunc(data, (processedData) =>{
//         secondFunc(processedData,(processedData)=>{
//             console.log(`final result: ${processedData}`)
//         })
//     });
// })

// Callback is not always asynchronous they can be sysynchronous too :see below
console.log("Start");
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => {
  console.log(n);
});
console.log("End");

console.clear();
console.log("Start challenge");
function getUserDataFromDB(name, callBack) {
  setTimeout(() => {
    console.log(`Getting User Name: `);
    callBack(name);
  }, 2000);
}

function getUserHobbies(name, callBack) {
  setTimeout(() => {
    console.log(`Getting User hobbies:`);
    callBack(["gaming", "reading"]);
  }, 2000);
}

// getUserDataFromDB("neha", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });
 console.log("End challenge");

// Another example of callback hell

function wakeUp(callBack) {
  console.log(`Waking up... ☀️`);
  setTimeout(() => {
    callBack();
  }, 2000);
}

function eatBreakFast(callBack) {
  console.log(`Eat Breakfast..🍜`);
  setTimeout(() => {
    callBack();
  }, 2000);
}

function train(callBack) {
  console.log("Training hard..💪");
  setTimeout(() => {
    callBack();
  }, 2000);
}

function prepareWeapons(callBack) {
  console.log(`prepare katana ⚔️`);
  setTimeout(() => {
    callBack();
  }, 2000);
}

function fight() {
  console.log("Ready to fight the final boss! 🐉");
}

// The callback hell begins here:
wakeUp(() => {
  eatBreakFast(() => {
    train(() => {
      prepareWeapons(() => {
        fight();
      });
    });
  });
});
