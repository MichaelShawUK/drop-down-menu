const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const ul = document.getElementById("menu-ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("grow-menu");
  if (Array.from(ul.classList).includes("display-menu")) {
    displayMenu();
  } else {
    setTimeout(displayMenu, 300);
  }
});

function displayMenu() {
  ul.classList.toggle("hide-menu");
  ul.classList.toggle("display-menu");
}
