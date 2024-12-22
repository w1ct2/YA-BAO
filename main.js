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
    slidesPerGroup: 2,
    mousewheel: {
        sensitivity: 2,
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
    slidesPerView: 2,
    slidesPerGroup: 1,
    mousewheel: {
        sensitivity: 1,
    },
    direction: 'vertical',
    spaceBetween: 15,
})
new Swiper ('.basket__bottom', {
    slidesPerView: 1.2,
    mousewheel: {
        sensitivity: 1,
    },
    spaceBetween: 15,
})
// new Swiper ('.basket-main__optional__swiper', {
//     slidesPerView: 3,
//     slidesPerGroup: 1,
//     freeMode: true,
//     spaceBetween: 20,
// })
const body = document.querySelector('body')
const blackout = document.querySelector('.blackout')
const enterBtn = document.querySelector('.enter__btn')
const enterPage = document.querySelector('.enter__page__container')
const enterRegPage = document.querySelector('.enter-reg__page')
const enterRegLink = document.querySelector('.enter-reg__link')
const enterRegPagePhone = document.querySelector('.enter-reg__page-phone')
const enterRegPagePhoneInput = document.getElementById('enter-reg__page-input')
const enterRegPageBtn = document.querySelector('.enter-reg__page-button')
const basketPage = document.querySelector('.basket__page')
const basketPageContainer = document.querySelector('.basket__page__container')
// const basketPlus = document.querySelector('#basket__plus')
// const basketValue = document.querySelector('#basket__value')
// const basketMinus = document.querySelector('#basket__minus')
// const basketPrice = document.querySelector('.basket__card__price')
// const initPrice = parseInt(basketPrice.textContent, 10);
const burgerBtn = document.querySelector('.burger__btn');
const burgerOptions = document.querySelector('.burger__options');
const burgerClose = document.querySelector('.burger__close')
const menuCardBasket = document.querySelectorAll('.menu__card__basket')
const purchasePage = document.querySelectorAll('.purchase__page')

blackout.addEventListener('click', () => {
    burgerOptions.classList.remove('active')
    blackout.classList.remove('active')
    burgerBtn.classList.remove('active')
    body.classList.remove('active')
    for (i = 0; i < purchasePage.length; i++) {
        purchasePage[i].classList.remove('active')
    }
    enterRegPage.classList.remove('active')
})
enterBtn.addEventListener('click', ()=> {
    enterPage.classList.toggle('active')
    basketPageContainer.classList.remove('active')
})
enterRegPage.addEventListener('click', (e)=>{
    e.stopPropagation()
})
enterRegLink.addEventListener('click', ()=>{
    enterRegPage.classList.add('active')
    blackout.classList.toggle('active')
    body.classList.toggle('active')
})

// const enterRegPagePhoneInputValue = document.getElementById('enter-reg__page-input').value
// const rePhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/
// const validPhone = rePhone.test(enterRegPagePhoneInputValue)

enterRegPageBtn.addEventListener('click', ()=>{
    const enterRegPageCode = document.createElement('form')
    enterRegPageCode.className = 'enter-reg__page-code'
    enterRegPage.appendChild(enterRegPageCode)
    if (enterRegPageBtn) {
        enterRegPageBtn.replaceWith(enterRegPageCode)
    }

    const enterRegPageCodeLabel = document.createElement('label')
    enterRegPageCodeLabel.textContent = 'Код из СМС'
    enterRegPageCode.appendChild(enterRegPageCodeLabel)

    const enterRegPageCodeInput = document.createElement('input')
    enterRegPageCode.appendChild(enterRegPageCodeInput)

    const enterRegPageCodeBtn = document.createElement('button')
    enterRegPageCodeBtn.textContent = 'Получить новый код'
    enterRegPageCode.appendChild(enterRegPageCodeBtn)

    const enterRegPagePhoneConfirmedInput = document.createElement('div')
    const enterRegPagePhoneConfirmedInputValue = enterRegPagePhoneInput.value 
    enterRegPagePhoneConfirmedInput.textContent = enterRegPagePhoneConfirmedInputValue
    if (enterRegPagePhoneInput) {
        enterRegPagePhoneInput.replaceWith(enterRegPagePhoneConfirmedInput)
    }

    const enterRegPagePhoneConfirmedBtn = document.createElement('button')
    enterRegPagePhoneConfirmedBtn.textContent = 'Изменить'
    enterRegPagePhone.appendChild(enterRegPagePhoneConfirmedBtn)
    enterRegPagePhoneConfirmedBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        if (enterRegPageCode) {
            enterRegPageCode.replaceWith(enterRegPageBtn)
        }
        if (enterRegPagePhoneConfirmedInput) {
            enterRegPagePhoneConfirmedInput.replaceWith(enterRegPagePhoneInput)
        }
        if (enterRegPagePhoneConfirmedBtn) {
            enterRegPagePhoneConfirmedBtn.remove()
        }
    })
})
basketPage.addEventListener('click', () => {
    basketPageContainer.classList.toggle('active')
    enterPage.classList.remove('active')
})

basketPageContainer.addEventListener('click', (event)=>{
    const i = event.target;
    if (i.classList.contains('basket__minus') || i.classList.contains('basket__plus')) {
        const card = i.closest('.basket__card')
        const price = card.querySelector('.basket__card__price')
        if (!price.dataset.initialPrice) {
            price.dataset.initialPrice = price.textContent;
        }
        const intPriceConst = parseInt(price.dataset.initialPrice);
        let intPrice = parseInt(price.textContent)
        const value = card.querySelector('.basket__value')
        let intValue = parseInt(value.textContent)
        const deleteBtn = card.querySelector('.basket__card__delete')
        const quantity = document.querySelector('.basket__page')
        let intQuantity = parseInt(quantity.textContent)
        if (i.classList.contains('basket__plus')) {
            intValue += 1
            intPrice += intPriceConst
            intQuantity += 1
            quantity.textContent = intQuantity
        } else if (i.classList.contains('basket__minus') && intValue > 1) {
            intValue -= 1
            intPrice -= intPriceConst
            intQuantity -= 1
            quantity.textContent = intQuantity
        }
        value.textContent = `${intValue}`
        price.textContent = `${intPrice} ₽`
        sumPriceFun()
        // basketQuantity()
    }
    if (i.classList.contains('basket__card__delete')) {
        const card = i.closest('.basket__card-slide')
        card.remove()
        sumPriceFun()
        basketQuantity()
    }
})

function sumPriceFun() {
    const priceList = document.querySelectorAll('.basket__card__price')
    let total = 0
    priceList.forEach((priceEl)=>{
        const priceText = priceEl.textContent.replace('₽', '').trim();
        const price = parseInt(priceText)
        total += price
    })
    const sumPrice = document.querySelector('.sum__price')
    sumPrice.textContent = `${total} ₽`
}
sumPriceFun()

function basketQuantity() {
    const quantity = document.querySelector('.basket__page')
    const intQuantity = parseInt(quantity.textContent)
    const bsktInner = document.querySelector('.basket__card-inner')
    const bsktInnerChilds = bsktInner.childElementCount;
    quantity.textContent = `${bsktInnerChilds}`;
}
basketQuantity()

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
