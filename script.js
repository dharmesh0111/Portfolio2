function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollLeft() {
  const container = document.querySelector('.project-scroll-container');
  container.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll left by 300px
}

function scrollRight() {
  const container = document.querySelector('.project-scroll-container');
  container.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll right by 300px
}
