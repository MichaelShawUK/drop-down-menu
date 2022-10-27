const menu = document.getElementById("menu");
const ul = document.getElementById("menu-ul");
const hover = document.getElementById('hover');

hover.addEventListener("mouseenter", () => {
  menu.classList.toggle("grow-menu");
  setTimeout(displayMenu, 300);
});

hover.addEventListener("mouseleave", () => {
  menu.classList.toggle("grow-menu");
  displayMenu();
});

function displayMenu() {
  ul.classList.toggle("hide-menu");
  ul.classList.toggle("display-menu");
}