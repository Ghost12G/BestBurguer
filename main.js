const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

/* ===============================
   SCROLL REVEAL
================================ */

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: false,
};

// HEADER
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 600,
});

// CATEGORÍAS
ScrollReveal().reveal(".categoria__card", {
  ...scrollRevealOption,
  interval: 200,
});

// CARDS DE PRODUCTOS
ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 300,
});

// SECCIONES GENERALES
ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".section__content", {
  ...scrollRevealOption,
  delay: 400,
});

// FOOTER
ScrollReveal().reveal("footer", {
  ...scrollRevealOption,
  origin: "top",
});
