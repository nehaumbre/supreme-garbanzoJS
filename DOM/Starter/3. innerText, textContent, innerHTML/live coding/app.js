// innerText
// textContent
// innerHTML
let innerTextOfP = document.querySelector("p").innerText;
console.log(`OutPut of innerText`);
console.log(innerTextOfP);
let innerHTMLOfP = document.querySelector("p").innerHTML;
console.log(`OutPut of innerHTML`);
console.log(innerHTMLOfP);
let textContent = document.querySelector("p").textContent;
console.log(`OutPut of textContent`);
console.log(textContent);

document.querySelector("h1").innerText = "Bye World!";
document.querySelector("h1").innerHTML = "<em>Bye!!</em> World";
