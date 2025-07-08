// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const anchor = document.querySelector("a");
const attr = document.querySelector('input').getAttribute('type');
document.querySelector(".a-two").setAttribute("href", "https://www.udemy.com/");

console.log(anchor.href);
console.log(attr);