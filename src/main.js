import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  // Form validation + redirect
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        window.location.href = "/profile/index.html";
      }

      form.classList.add("was-validated");
    });
  });

  // Active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-item").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    if (
      currentPath === href ||
      currentPath === href.replace("/index.html", "/")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Logout
  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const confirmLogout = confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        window.location.href = "/index.html";
      }
    });
  }
});
