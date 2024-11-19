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
new Swiper ('.basket__card__container', {
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    mousewheel: {
        sensitivity: 1,
    },
    direction: 'vertical',
    spaceBetween: 20,
})
new Swiper ('.basket-main__optional__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    // mousewheel: {
    //     sensitivity: 1,
    // },
    freeMode: true,
    spaceBetween: 20,
})
// new Swiper ('.basket__bottom', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     mousewheel: {
//         sensitivity: 1,
//     },
//     spaceBetween: 15,
// })
const basketPage = document.querySelector('.basket__page')
const basketPageContainer = document.querySelector('.basket__page__container')
basketPage.addEventListener('click', () => {
    basketPageContainer.classList.toggle('active')
})
const basketPlus = document.querySelector('#basket__plus')
const basketValue = document.querySelector('#basket__value')
const basketMinus = document.querySelector('#basket__minus')
const basketPrice = document.querySelector('.basket__card__price')
const initPrice = parseInt(basketPrice.textContent, 10);
basketPlus.addEventListener('click', ()=>{
    let bsktValue = parseInt(basketValue.textContent, 10)
    let bsktPrice = parseInt(basketPrice.textContent, 10)
    basketValue.textContent = bsktValue + 1;
    basketPrice.textContent = initPrice + bsktPrice + " ₽";
})
basketMinus.addEventListener('click', ()=>{
    let bsktValue = parseInt(basketValue.textContent, 10)
    let bsktPrice = parseInt(basketPrice.textContent, 10)
    if (bsktValue > 1) {
        basketValue.textContent = bsktValue - 1;
        basketPrice.textContent = bsktPrice - initPrice  + " ₽";
    }
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
