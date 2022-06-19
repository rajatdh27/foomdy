const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");
const searchBox = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");
const searchClose = document.querySelector("#search-close");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// window.addEventListener("scroll", () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// });

searchBox.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

searchClose.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

const swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
});
