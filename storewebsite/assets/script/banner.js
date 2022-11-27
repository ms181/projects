$(document).ready(function () {
  $swiper1 = new Swiper('.swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 500,
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });
});