// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
// 4. Select div which has the class & Id of "yello" by using querySelector()
// 5. Select all the elements which has the class of "teal" by using querySelectorAll

//getElementsByTagName returns a live HTMLCollection not an array so
//we need to loop to style it
var headings = document.getElementsByTagName("h4");
for (let i = 0; i < headings.length; i++) {
  headings[i].style.backgroundColor = "teal";
}
var a = document.getElementsByTagName("div");
console.log(a[0].innerText = 'GREEEN');
document.getElementById("blue").innerText = "BLUE";

document.querySelector(".yellow").innerText = "YELLOW";
let tealDivs = document.querySelectorAll(".teal")
tealDivs.forEach((div) => div.style.backgroundColor = "red")

