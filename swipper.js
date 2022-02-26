const swiper = new Swiper('.mySwiper', {
    preloadImages: false,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    mousewheel: false,
    centeredSlides: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
  
    }
  })