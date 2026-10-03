const header = document.querySelector(".pf-header");
let lastScrollY = 0;
let ticking = false;

function showHeader() {
  if (!header.classList.contains("header-sticky")) {
    header.classList.add("header-sticky");
    header.animate(
      { transform: ["translateY(-100%)", "translateY(0%)"] },
      { duration: 350, fill: "forwards" }
    );
  }
}

function hideHeader() {
  if (header.classList.contains("header-sticky")) {
    header.animate(
      { transform: "translateY(-100%)" },
      { duration: 350, fill: "forwards" }
    ).finished.then(() => {
      header.classList.remove("header-sticky");
    });
  }
}

function onScroll() {
  const currentY = window.scrollY;

  if (currentY < lastScrollY && currentY > 0) {
    showHeader(); // scrolling up
  } else if (currentY > 0) {
    hideHeader(); // scrolling down
  } else {
    header.classList.remove("header-sticky"); // top of page
  }

  lastScrollY = currentY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
});
