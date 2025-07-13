// document.addEventListener("click", () => {
//   let background = event.srcElement.value;
//   document.querySelector("body").style.backgroundColor = background;
//   document.querySelector("." + background).classList.add("clicked");
//   setTimeout(() => {
//     document.querySelector("." + background).classList.remove("clicked");
//   }, 200);
// });

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")){
    let background = e.target.value;
    document.querySelector("body").style.backgroundColor = background;
    document.querySelector("." + background).classList.add("clicked");
    setTimeout(() => {
      document.querySelector("." + background).classList.remove("clicked");
    }, 200);
  }});