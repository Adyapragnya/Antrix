document.addEventListener('DOMContentLoaded', function () {
  const slider = new Swiper('.hero-slider', {
    loop: true,
    effect: 'fade',
    speed: 900,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.hero-slider .swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.hero-slider .swiper-button-next',
      prevEl: '.hero-slider .swiper-button-prev',
    },
    keyboard: { enabled: true },
    preloadImages: true
  });

  // Refresh AOS when slide changes (optional)
  if (window.AOS) {
    slider.on('slideChangeTransitionEnd', () => {
      if (typeof AOS.refreshHard === 'function') AOS.refreshHard();
    });
  }
});
