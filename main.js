const menuActive = document.querySelector(".pop-up__menu");
const burger = document.querySelector(".header-section__btn_butter");

function toggleMenu() {
  menuActive.classList.toggle("hidden");
}

burger.addEventListener("click", toggleMenu);
