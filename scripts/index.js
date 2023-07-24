const mobile = document.querySelector(".header__mobile");
const menu = document.querySelector(".header__menu");
const body = document.querySelector(".page");
const headerLink = document.querySelectorAll(".header__link");

let active = false;

const closeMenu = () => {
  mobile.classList.remove("header__mobile_active");
  menu.classList.remove("header__menu_active");
  body.classList.remove("page_scroll");
  return (active = !active);
};

const controlMenu = () => {
  if (active === false) {
    mobile.classList.add("header__mobile_active");
    menu.classList.add("header__menu_active");
    body.classList.add("page_scroll");
    return (active = true);
  } else {
    closeMenu();
  }
};

mobile.addEventListener("click", controlMenu);

document.addEventListener("click", (e) => {
  if (
    (e.target !== mobile && e.target !== menu && active === true) ||
    e.target === headerLink
  ) {
    closeMenu();
  }
});
