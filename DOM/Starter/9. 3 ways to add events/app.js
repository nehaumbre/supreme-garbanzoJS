// ----------- BAD WAY-----------
// const butt = document.querySelector('.second-btn');
// butt.onclick = function (){
//     console.log("BBOM");
// }

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", function () {
  console.log("BOOM");
});

// ----------- Event (e) Object -----------
const para = document.querySelector(".para");
para.addEventListener("click", (event) => console.log(event));

let form = document.querySelector("form");
let inp = document.querySelector('#pas');
form.addEventListener("click", (event) => { // event can also be written as e
  event.preventDefault();
  console.log(inp.value);
});
