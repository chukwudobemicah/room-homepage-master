const hamburgerMenu = document.querySelector('.header__hamburger-div');
const nav = document.querySelector('nav');
const navCancel = document.querySelector('.nav--cancel');
const shopNow = document.querySelectorAll(
  '.swiper-content__paragraph__shopnow a'
);
const slidersBtnContainer = document.querySelector(
  '.swiper_wrapper--button-navigators'
);
console.log(slidersBtnContainer);
const anim = function (sn) {
  sn.style.animation = 'slide-out 2s ease forwards';
  setTimeout(function () {
    sn.style.animation = 'slide-in 2s ease forwards';
  }, 2000);
};

shopNow.forEach(sn => {
  sn.addEventListener('animationend', function () {
    sn.style.animation = '';
    sn.style.animation = 'slide-in 2s ease forwards';
    anim(sn);
  });
});

let hamburgerMenuOpen = false;

hamburgerMenu.addEventListener('click', function () {
  if (!hamburgerMenuOpen) {
    hamburgerMenu.classList.add('open');
    hamburgerMenuOpen = true;
  } else {
    hamburgerMenu.classList.remove('open');
    hamburgerMenuOpen = false;
  }
  nav.classList.add('translate-down');
});
navCancel.addEventListener('click', function () {
  nav.classList.remove('translate-down');
  hamburgerMenu.classList.remove('open');
  hamburgerMenuOpen = false;
});

if (window.matchMedia('(max-width:700px)').matches) {
  const picture = document.querySelector('picture');
  const pictureHeight = picture.offsetHeight;
  const btnContainersHeight = slidersBtnContainer.offsetHeight;
  const absoluteHeight = pictureHeight - btnContainersHeight;
  slidersBtnContainer.style.top = `${absoluteHeight}px`;
}
