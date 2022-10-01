const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector(".menu ul");
const menuItems = document.querySelectorAll(".menu ul li a");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
  });
}

function markMenuItem(menuItem) {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }
  menuItem.classList.add("active");
}
