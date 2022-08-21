const navLinks = document.querySelector('.nav-links');
const toggleBtn = document.querySelector('.toggle-btn');

function navOn () {
  if (navLinks.classList.contains('nav-links-active')) {
    navLinks.classList.remove('nav-links-active');
  } else {
    navLinks.classList.add('nav-links-active');
  }
}
toggleBtn.addEventListener('click', navOn);


