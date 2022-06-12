let menuBtn = document.querySelector('.menu__icon');
let sandwich = document.querySelector('.sandwich');
let regDate = document.querySelector('.top-header__container');
let mainMenu = document.querySelector('.main-header__menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('menu-open');
  regDate.classList.toggle('active');
  mainMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
});

var swiper = new Swiper(".brandsSwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
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

var swiper = new Swiper(".goodsSwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
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
    // when window width is >= 480px
    480: {
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
      spaceBetween: 23
    }
  }
});

var swiper = new Swiper(".swiperNewCol", {
  slidesPerView: 3,
  spaceBetween: 0,
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
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});