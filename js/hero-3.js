new Swiper(".pf-hero-3 .pf-hero-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".pf-hero-3 .pf-hero-next",
    prevEl: ".pf-hero-3 .pf-hero-prev",
  },
  pagination: {
    el: ".pf-hero-3 .pf-hero-pagination",
    clickable: true,
  },
});
