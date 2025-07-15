// console.log(fetch('userdata.txt'));
// you can handle data by
//callback
//promise
//async await

// async function fetchUserFile() {
//     try {
//         const response = await fetch('userdata.txt'); //local file
//         const data = await response.text();
//         console.log("Fetched file content:\n", data);
//     } catch (error) {
//         console.error("Error fetching file:", error);
//     }
// }

// fetchUserFile();

// The fetch() function is a modern way to make HTTP requests
// (like getting data from a server, API, or file).
// It returns a Promise, which resolves to a Response object.

// fetch("userdatta.txt") //tries to load userdata.txt
//   .then((res) => res.text()) // converts the response to raw text
//   .then((data) => console.log(data)) //uses the text
//   .catch(err => console.log(err));
//If anything fails, use .catch(...) to handle it.
// This won't throw an error on a 404 file not found,
// because fetch only rejects on network errors, not HTTP errors.

//   .then((res) => {
//     if(!res.ok) throw Error(res.statusText); // throws if 404, 500, etc. in this case..Error: Not Found
//     return res.text();
//   }) // converts the response to raw text
//   .then((data) => console.log(data)) //uses the text
//   .catch(err => console.log(err));

// const result = document.querySelector(".result");
// fetch("userdata.txt")
// .then((res) => {
//     if(!res.ok) throw Error(res.statusText);
//     return res.text()
// })
// .then((data)=> result.textContent = data)
// .catch((error)=> result.textContent ="ERROR LOADING DATA");

//*using async function

async function loadFile() {
  try {
    let result = await fetch("userdaata.txt");
    if (!result.ok) throw Error(result.statusText);
    const data = await result.text();
    document.querySelector(".result").textContent = data;
  } catch (error) {
    // console.error("ERROR LOADING CONTENT", error);
    document.querySelector(".result").textContent = "Error loading content: " + error.message;
  }
}

loadFile();
