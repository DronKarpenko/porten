var swiper = new Swiper(".brandsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  allowSlidePrev: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 300px
    300: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 1110px
    1110: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  }
});