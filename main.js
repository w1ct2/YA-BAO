new Swiper('.prewiev__slider', {
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
    simulateTouch: false,
});

new Swiper('.options', {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    mousewheel: {
        sensitivity: 1,
    },
    // breakpoints: {}
})

// document.getElementsById('options__item1').addEventListener('click', function(){
//     document.querySelector('menu__one').scrollIntoView({ behavior: 'smooth' });
// }); 
