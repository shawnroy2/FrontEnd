console.log("test");

var button1 = document.querySelector("article button");

var menu = document.querySelector("header button");

function veranderbutton1 () {
    button1.classList.toggle("effect");
}

function verandermenu() {
    menu.classList.toggle("verander");
}

button1.addEventListener("click", veranderbutton1);
menu.addEventListener("click", verandermenu);



