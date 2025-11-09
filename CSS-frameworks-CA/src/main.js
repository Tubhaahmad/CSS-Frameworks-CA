import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/style.scss'



(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav-item").forEach(link => {
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
});

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const confirmLogout = confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        
        window.location.href = "../index.html";
      }
    });
  }
});



