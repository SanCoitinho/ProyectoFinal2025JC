// Hamburguesa responsive para navbar
window.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');

  if (hamburger && navbar) {
    hamburger.addEventListener('click', function() {
      navbar.classList.toggle('open');
    });
  }
});
