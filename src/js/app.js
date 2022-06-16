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
  } else {
    headerNav.classList.add('visible');
    menuBtn.classList.add('active');
  }
}

let mobileNavMatch = window.matchMedia('(max-width: 1200px)');

mobileNavMatch.addEventListener('change', mobileMenuWidth);

function mobileMenuWidth() {
  if (mobileNavMatch.matches && mobileNavMatch) {
    logo.src = '../assets/images/logo-white.png';
  } else {
    logo.src = '../assets/images/logo@2x.png';
    headerNav.classList.remove('visible');
    menuBtn.classList.remove('active');
  }
}

mobileMenuWidth(mobileNavMatch);

// ***********************

const accordionItems = document.querySelectorAll('.accordion > div');

accordionItems.forEach((item) =>
  item.addEventListener('click', toggleAccordion)
);

function toggleAccordion(e) {
  let target = e.currentTarget;
  if (!target.classList.contains('active')) {
    accordionItems.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.add('active');
  } else {
    target.classList.remove('active');
  }
}
