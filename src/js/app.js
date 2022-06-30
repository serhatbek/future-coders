const menuBtn = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header__nav');
const headerNavLinks = document.querySelectorAll('.header__nav a');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const menuHalo = document.querySelector('.halo');

if (menuBtn) {
  menuBtn.addEventListener('click', toggleMenu);
}

function closeMobileNav() {
  headerNav.classList.remove('visible');
  menuBtn.classList.remove('active');
  body.classList.remove('overflowHidden');
  menuHalo.classList.remove('active');
}

if (headerNavLinks) {
  headerNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (body.classList.contains('overflowHidden')) {
        closeMobileNav();
      }
    });
  });
}

function toggleMenu() {
  if (headerNav.classList.contains('visible')) {
    closeMobileNav();
  } else {
    headerNav.classList.add('visible');
    menuBtn.classList.add('active');
    body.classList.add('overflowHidden');
    menuHalo.classList.add('active');
  }
}

let mobileNavMaxMatch = window.matchMedia('(max-width: 1200px)');
let mobileNavMinMatch = window.matchMedia('(min-width: 1201px)');

mobileNavMaxMatch.addEventListener('change', mobileMenuMaxWidth);
mobileNavMinMatch.addEventListener('change', mobileMenuMinWidth);

function mobileMenuMaxWidth() {
  if (mobileNavMaxMatch.matches && mobileNavMaxMatch) {
    logo.src = '../assets/images/logo-white.png';
  } else {
    logo.src = '../assets/images/logo@2x.png';
    headerNav.classList.remove('visible');
    menuBtn.classList.remove('active');
  }
}

function mobileMenuMinWidth() {
  if (mobileNavMinMatch.matches && mobileNavMinMatch) {
    headerNav.classList.remove('visible');
    menuBtn.classList.remove('active');
    menuHalo.classList.remove('active');
  }
}

mobileMenuMaxWidth(mobileNavMaxMatch);
mobileMenuMinWidth(mobileNavMinMatch);

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

// *******************************

const openModalBtns = document.querySelectorAll('.js-open-modal');
const closeModalBtns = document.querySelectorAll('.js-close-modal');
const modals = document.querySelectorAll('.modal-bg');

if (openModalBtns) {
  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modal = document.querySelector(e.target.dataset.modalName);
      modal.classList.add('active');
    });
  });
}

if (closeModalBtns) {
  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modals.forEach((modal) => {
        if (modal.classList.contains('active')) {
          modal.classList.remove('active');
        }
      });
    });
  });
}

// if (openModalBtns) {
//   openModalBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       let target = e.target.dataset.modalName;
//       modals.forEach((modal) => {
//         if (modal.classList.contains(target)) {
//           modal.classList.add('active');
//         }
//       });
//     });
//   });
// }
