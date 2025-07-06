// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

let innerTextElementOne = document.querySelector('.first').innerText;
console.log(`Check the innerText of "first" element : 
              ${innerTextElementOne}`);

let textContentElementTwo = document.querySelector('.second').textContent;
console.log(`Check the textContent of "second" element : ${textContentElementTwo}`);

let innerHTMLElementThree = document.querySelector('.third').innerHTML;
console.log(`Check the innerHTML of "third" element : ${innerHTMLElementThree}`);