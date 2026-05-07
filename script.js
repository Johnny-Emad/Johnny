const yearEl = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
console.log(currentYear);



(function () {
    const header = document.querySelector(".site-header");
    const toggleBtn = document.querySelector(".mobile-nav-toggle");
    const navLinks = document.querySelectorAll(".site-nav__link");

    // Open / close the mobile menu
    toggleBtn.addEventListener("click", function () {
      const isOpen = header.classList.toggle("nav-open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      toggleBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    // Close menu when any nav link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.setAttribute("aria-label", "Open navigation menu");
      });
    });
  })();