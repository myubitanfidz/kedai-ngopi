// Menunggu DOM siap sebelum mengeksekusi script
document.addEventListener("DOMContentLoaded", function () {
  const navbarnav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  // Toggle sidebar saat hamburger menu diklik
  if (hamburgerMenu && navbarnav) {
    hamburgerMenu.addEventListener("click", function (e) {
      e.preventDefault();
      navbarnav.classList.toggle("active");
    });
  }

  // Menutup sidebar saat klik di luar sidebar
  document.addEventListener("click", function (e) {
    if (!navbarnav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      navbarnav.classList.remove("active");
    }
  });
});
