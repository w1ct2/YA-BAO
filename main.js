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
});
new Swiper ('.purchase__page-third__choice', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    mousewheel: {
        sensitivity: 1,
    },
    direction: 'vertical',
    spaceBetween: 150,
})

const burgerBtn = document.querySelector('.burger__btn');
const burgerOptions = document.querySelector('.burger__options');
const burgerClose = document.querySelector('.burger__close')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    burgerOptions.classList.toggle('active')
    body.classList.toggle('active')
    blackout.classList.toggle('active')
})
burgerClose.addEventListener('click', () => {
    burgerOptions.classList.remove('active')
    blackout.classList.remove('active')
    burgerBtn.classList.remove('active')
    body.classList.remove('active')
})

const body = document.querySelector('body')
const blackout = document.querySelector('.blackout')
blackout.addEventListener('click', () => {
    burgerOptions.classList.remove('active')
    blackout.classList.remove('active')
    burgerBtn.classList.remove('active')
    body.classList.remove('active')
    for (i = 0; i < purchasePage.length; i++) {
        purchasePage[i].classList.remove('active')
    }
})


const menuCardBasket = document.querySelectorAll('.menu__card__basket')
const purchasePage = document.querySelectorAll('.purchase__page')
menuCardBasket.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const btn = document.querySelector(`.btn-${index}`)
        const page = document.querySelector(`.page-${index}`)
        if (btn) {
            console.log(`${index}`);
            body.classList.toggle('active')
            blackout.classList.toggle('active')
            purchasePage[`${index}`].classList.toggle('active')
        }
    })
})
