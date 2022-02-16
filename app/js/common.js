var swiper = new Swiper('.contacts-slider-wrap', {
  slidesPerView: 5,
  watchSlidesVisibility: true,
  watchOverflow: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.contacts-slider .swiper-button-next',
    prevEl: '.contacts-slider .swiper-button-prev',
  },
  breakpoints: {
    10: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 2,
    },
    680: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    }
  }
});