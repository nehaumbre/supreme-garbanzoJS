const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
   // if its ' ' put space else put the pressed key
  insert.innerHTML = `
    <div class="key">

    ${event.key === " " ? "Space" : event.key}
    <small>event.key</small>
    </div>

    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>    
    `;
});
 