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
console.log("Convert date format to toDateString: ",date.toDateString());
console.log("Convert date format to toLocaleDateString: ", date.toLocaleDateString());
console.log("Convert date format to toTimeString: ", date.toTimeString());
console.log("Convert date format to toLocaleTimeString: ", date.toLocaleTimeString());