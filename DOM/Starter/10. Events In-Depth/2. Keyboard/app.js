// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener('keydown', () => {
//     console.log("Key pressed!");
// })
// input.addEventListener('keyup', () => {
//     console.log("Key up!");
// })

// input.addEventListener('keydown', e => {
//     console.log(e.charCode);// deprecated
// })

input.addEventListener('keydown', e => {
        console.log(e.code);
    })