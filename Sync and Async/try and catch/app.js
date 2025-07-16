// In JavaScript, try and catch are keywords used to implement error handling.
// Error handling is essential when writing code to gracefully handle unexpected errors
// and exceptions that may occur during program execution.
//The try and catch blocks work together to enable developers to catch and handle errors,
// preventing them from crashing the entire application.

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("ERROR Parsing JSON", error.message);
    return null;
  }
}

const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30,}';

const resultValid =  parseJSON(validJSON);
console.log(resultValid);

console.log("-----------================-----------")

const resultInvalid =  parseJSON(invalidJSON);
console.log(resultInvalid);