new Swiper('.swiper', {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 2000,
    slidesPerView: 3,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: -300,
        slideShadows: false,
        scale: 0.8,
        depth: 200,
    },
});

// let container = document.querySelector(".swiper");
// let images = container.querySelectorAll("img");
// images[0].classList.toggle("opacity");
// images[images.length - 1].classList.toggle("opacity");
