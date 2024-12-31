// home section swiper js starts hare 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
  });


//   feedback card swiper js starts hare 
var swiper = new Swiper(".feedback-card", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        250: {
            slidesPerView: 1.2,
        },
        652: {
            slidesPerView: 2,
        },
        1180: {
            slidesPerView: 3,
        },
    }
  });