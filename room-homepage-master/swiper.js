const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  speed: 400,
  spaceBetween: 0,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
nextButton.addEventListener('click', function () {
  swiper.slideNext();
});
prevButton.addEventListener('click', function () {
  swiper.slidePrev();
});
