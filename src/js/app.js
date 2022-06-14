const menuBtn = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header__nav');
const logo = document.querySelector('.logo');

if (menuBtn) {
  menuBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  if (headerNav.classList.contains('visible')) {
    headerNav.classList.remove('visible');
    menuBtn.classList.remove('active');
    // logo.src = '../assets/images/logo@2x.png';
  } else {
    headerNav.classList.add('visible');
    menuBtn.classList.add('active');
    // logo.src = '../assets/images/logo-white.png';
  }
}

let mobileNavMatch = window.matchMedia('(max-width: 1200px)');

mobileNavMatch.addEventListener('change', mobileMenuWidth);

function mobileMenuWidth() {
  if (mobileNavMatch.matches && mobileNavMatch) {
    logo.src = '../assets/images/logo-white.png';
  } else {
    logo.src = '../assets/images/logo@2x.png';
  }
}

mobileMenuWidth(mobileNavMatch);
