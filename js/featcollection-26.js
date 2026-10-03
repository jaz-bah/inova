new Swiper(".pf-featcollection-26 .pf-collection-slider", {
  slidesPerView: 1.4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".pf-featcollection-26 .pf-collection-next",
    prevEl: ".pf-featcollection-26 .pf-collection-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
  },
});
