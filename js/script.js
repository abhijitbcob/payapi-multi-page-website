const menuButton = document.getElementById("btn-menu");
const closeButton = document.getElementById("btn-close");
const mysidenav = document.getElementById("mysidenav");

let sidenavState = false;
menuButton.addEventListener("click", function () {
  if (!sidenavState) {
    mysidenav.style.transform = "translateX(0)";
    sidenavState = true;
  }
});

closeButton.addEventListener("click", function () {
  if (sidenavState) {
    mysidenav.style.transform = "translateX(100%)";
    sidenavState = false;
  }
});
