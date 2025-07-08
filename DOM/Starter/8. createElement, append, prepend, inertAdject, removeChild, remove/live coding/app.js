// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// let h1 = document.createElement('h1');
// const body = document.body;
// h1.textContent = "Hello World!!";
// h1.classList.add("noshow");
// body.appendChild(h1);
//-------------------------------------------
// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "Im Li tag";
// ul.appendChild(newLi);

// const firstLi = document.querySelector("li");
// //selector.insertBefore(what,where);
// ul.insertBefore(newLi, firstLi);

// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "im italicized";
// i.style.color = "teal";
// firstP.insertAdjacentElement("beforebegin",i)
// firstP.insertAdjacentElement("afterbegin",i)
// firstP.insertAdjacentElement("beforeend",i)
// firstP.insertAdjacentElement("afterend",i)

let section = document.querySelector("section");

const i = document.createElement("i");
i.innerText = "im italicized";
i.style.color = "teal";

const span = document.createElement("span");
span.innerText = "BOOOM";
span.style.color = "crimson";
section.append(span);
section.prepend(i);

const newList = document.querySelector('.new-list');
newList.removeChild(document.querySelector('.fourth'));
newList.remove(); //removes all