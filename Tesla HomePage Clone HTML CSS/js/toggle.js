const fullPageElement = document.getElementById("fullpage");
const menuBtn = document.querySelector(".menu_btn");
const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation_close_btn");

const overlayBlur = document.querySelector(".blur__overlay")

const IS_ACTIVE = "is--active";
const NO_SCROLL = "no--scroll"

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  overlayBlur.classList.toggle(IS_ACTIVE);
  fullPageElement.classList.toggle(NO_SCROLL);
};

const CLICK = "click";

menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
overlayBlur.addEventListener(CLICK, toggleNavigation);
