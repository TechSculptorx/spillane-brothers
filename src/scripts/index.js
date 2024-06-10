import "../styles/index.scss";

// Navigation hamburger
const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");

  setTimeout(() => {
    navLinks.classList.toggle("open");
  }, 200);
});

// Back to top
const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Tabs section
const tabs = document.querySelectorAll(".tabs");

if (tabs.length > 0) {
  tabs.forEach((tab) => {
    const tabsSwitches = tab.querySelectorAll(".tab-switch");
    const tabsContents = tab.querySelector(".tabs-content");

    tabsSwitches.forEach((tabSwitch) => {
      tabSwitch.addEventListener("click", () => {
        const swichId = tabSwitch.getAttribute("data-tab");
        const tabCont = tabsContents.querySelector(
          `[data-content="${swichId}"]`
        );

        tabsSwitches.forEach((tab) => tab.classList.remove("active"));
        tabSwitch.classList.add("active");

        tabsContents
          .querySelectorAll(".tabs-content-detail")
          .forEach((content) => {
            content.classList.remove("active");
          });
        tabCont.classList.add("active");
      });
    });
  });
}

console.log("Hello, world!");
