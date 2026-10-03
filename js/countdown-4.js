new Swiper(".pf-countdown-4 .pf-countdown-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    waitForTransition: true,
  },
  pagination: {
    el: ".pf-countdown-4 .pf-product-pagination",
    clickable: true,
  },
});

// Countdown Timer
const futureDate = new Date("2025-09-30T12:00:00");

const countdownElement = document.querySelector(".pf-countdown-timer");

function updateCountdown() {
  const now = new Date();
  const diff = futureDate - now;

  let days = "00";
  let hours = "00";
  let minutes = "00";

  if (diff > 0) {
    days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
    hours = String(
      Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    minutes = String(
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
  } else {
    clearInterval(timerInterval);
  }

  countdownElement.innerHTML = `
    <span>${days} d</span> :
    <span>${hours} h</span> :
    <span>${minutes} m</span>
  `;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
