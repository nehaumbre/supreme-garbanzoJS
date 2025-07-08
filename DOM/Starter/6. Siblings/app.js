const Child = document.querySelector("li");
console.log(Child.parentElement);
console.log(Child.parentElement.parentElement);

const Parent = document.querySelector("ul");
console.log(Parent.children);
console.log(Parent.children[0]);
console.log(Parent.children[1]);
console.log(Parent.children[2]);
console.log(Parent.children[3]);
console.log(Parent.children[5]);

//Siblings
let Sibling = document.querySelector("li");
console.log(Sibling.nextElementSibling);
