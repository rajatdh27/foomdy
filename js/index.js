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

const swiper1 = new Swiper(".home-slider", {
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

const swiper2 = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
