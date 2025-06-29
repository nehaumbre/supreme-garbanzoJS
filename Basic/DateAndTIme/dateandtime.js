const date = new Date();

// Date Components
const year = date.getFullYear();
const month = date.getMonth(); // Note: 0 = January, 11 = December
const dayOfWeek = date.getDay(); // Note: 0 = Sunday, 6 = Saturday
const dayOfMonth = date.getDate(); // Day in the month (1–31)

// Time Components
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

// Timezone
const timeZoneOffset = date.getTimezoneOffset(); // in minutes

// Output
console.log("Current Date: " + date);
console.log("Year:", year);
console.log("Month (0–11):", month);
console.log("Day of Week (0–6):", dayOfWeek);
console.log("Day of Month:", dayOfMonth);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);
console.log("Timezone Offset (minutes from UTC):", timeZoneOffset);
console.log("Convert date format to toDateString: ", date.toDateString());
console.log(
  "Convert date format to toLocaleDateString: ",
  date.toLocaleDateString()
);
console.log("Convert date format to toTimeString: ", date.toTimeString());
<<<<<<< HEAD
console.log("Convert date format to toLocaleTimeString: ", date.toLocaleTimeString());


// we can set the dates too

// date.setDate(date.getdate + 1);
date.setDate(date.getDate() - 1);
console.log("previous day date ",date);
=======
console.log(
  "Convert date format to toLocaleTimeString: ",
  date.toLocaleTimeString()
);

//setInterval()
// setInterval(() => {
//     console.log("The function runs every 2 seconds")
// }, 2000);

// setTimeout
setTimeout(() => {
  console.log("this function runs after the set timeout or delay");
}, 3000);

// //stop the interval after 10 seconds
// const intervalId = setInterval(() => {
//   console.log("This executes at interval of 10 seconds or so");
// },10000);

// console.log(intervalId);
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped");
// }, 10000);

const intervalId = setInterval(() => {
  console.log("This executes at interval of 10 seconds or so");
}, 1000); // Run every 10 seconds

console.log("Interval ID:", intervalId);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 10000); // Stop after 10 seconds
>>>>>>> 2620abb9a6c90e85c6f74a23e4bba36f7423b0ae
