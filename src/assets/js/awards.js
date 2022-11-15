new Swiper('.swiper--v1', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
    depth: -80,
    rotate: 0,
    scale: 0.73,
    slideShadows: false,
  },
  initialSlide: 1,
  maxBackfaceHiddenSlides: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--v1',
    clickable: true,
  },
});

new Swiper('.swiper--v2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  centeredSlides: false,
  initialSlide: 0,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--v2',
    clickable: true,
  },
});

new Swiper('.swiper--v3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  centeredSlides: false,
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--v3',
    clickable: true,
  },
});
