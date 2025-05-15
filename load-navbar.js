import { navbar } from './navbar.js';
document.getElementById("navbar-placeholder").innerHTML = navbar;

// document.getElementById("navbar-placeholder").innerHTML = navbar;

window.toggleMenu = function () {
  const menu = document.getElementById('navbar-links');
  if (menu) {
    menu.classList.toggle('active');
  }
};