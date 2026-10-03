new Swiper(".pf-featcollection-6 .pf-collection-slider", {
  slidesPerView: "auto",
  spaceBetween: 12,
  navigation: {
    prevEl: ".pf-featcollection-6 .pf-collection-prev",
    nextEl: ".pf-featcollection-6 .pf-collection-next",
  },
  breakpoints: {
    576: {
      spaceBetween: 16,
    },
    768: {
      spaceBetween: 24,
    },
  },
});
