// Свайперы
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
const basketSlider = new Swiper ('.basket__card__container', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    mousewheel: {
        sensitivity: 1,
    },
    direction: 'vertical',
    spaceBetween: 15,
    observer: true,
})
new Swiper ('.basket__bottom', {
    slidesPerView: 1.2,
    mousewheel: {
        sensitivity: 1,
    },
    spaceBetween: 15,
})
// Переменные
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
const burgerBtn = document.querySelector('.burger__btn');
const burgerOptions = document.querySelector('.burger__options');
const burgerClose = document.querySelector('.burger__close')
const menuCardBasket = document.querySelectorAll('.menu__card__basket')
const purchasePage = document.querySelectorAll('.purchase__page')
const enterBurgerBtn = document.querySelector('.enter__burger')
const inputPhone = document.getElementById('enter-reg__page-input')
const newContainer = document.querySelector('.new__container')

// Переход с enter страницы на окно "Войти"
document.addEventListener('DOMContentLoaded', ()=>{
    if (localStorage.getItem('codeActive')) {
        enterRegPage.classList.add(localStorage.getItem('codeActive'))
        blackout.classList.add('active')
        renderEnterPage()
        localStorage.removeItem('codeActive')
    }
    if (localStorage.getItem('phoneActive')) {
        enterRegPage.classList.add(localStorage.getItem('phoneActive'))
        blackout.classList.add('active')
        localStorage.removeItem('phoneActive')
    }
})

// Затемнение
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
enterBurgerBtn.addEventListener('click', ()=>{
    burgerOptions.classList.remove('active')
    blackout.classList.remove('active')
    enterPage.classList.add('active')
    burgerBtn.classList.remove('active')
})
enterRegPage.addEventListener('click', (e)=>{
    e.stopPropagation()
})
enterRegLink.addEventListener('click', ()=>{
    enterRegPage.classList.add('active')
    blackout.classList.toggle('active')
    body.classList.toggle('active')
})

// Рендер окна "Войти"
const renderEnterPage = function() {
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
    enterRegPageCodeInput.addEventListener('input', (i)=>{
        const value = i.target.value
        i.target.value = value.replace(/\D/g, '')
        localStorage.setItem('code', value)
    })

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
}
enterRegPageBtn.addEventListener('click', renderEnterPage)
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
    }
    if (i.classList.contains('basket__card__delete')) {
        const card = i.closest('.basket__card-slide')
        const cardId = card.dataset.id
        let basketData = JSON.parse(localStorage.getItem('newBasketCard')) || [];
        basketData = basketData.filter(item => item.id !== cardId);
        localStorage.setItem('newBasketCard', JSON.stringify(basketData));
        card.remove();
        sumPriceFun();
        basketQuantity();
    }
})

// Функция подсчета итоговой стоимости
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
// Функция подсчета товаров в корзине
function basketQuantity() {
    const quantity = document.querySelectorAll('.basket__value')
    let total = 0
    quantity.forEach((i)=>{
        const intQuantity = parseInt(i.textContent)
        total += intQuantity
    })
    const quantityText = document.querySelector('.basket__page')
    quantityText.textContent = `${total}`
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

// Делегирование (кривое) всплывающего окна товара
menuCardBasket.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const btn = document.querySelector(`.btn-${index}`)
        const page = document.querySelector(`.page-${index}`)
        if (btn) {
            body.classList.toggle('active')
            blackout.classList.toggle('active')
            purchasePage[`${index}`].classList.toggle('active')
        }
    })
})

// Окна new
// newContainer.addEventListener('click', (event)=>{
//     const card = event.target.closest('.new__card')
//     if (card) {
//         const purchasePage = card.querySelector('.purchase__page')
//         purchasePage.classList.add('active')
//         blackout.classList.add('active')
//     }
//     const btn = card.querySelector('.purchase__page-btn')
//     btn.addEventListener('click', () => {
//         const cardImg = card.querySelector('.new__img');
//         const cardTitle = card.querySelector('.new__card__title');
//         const cardText = card.querySelector('.new__card__text');
//         const cardPrice = card.querySelector('.new__price');

//         if (!cardImg || !cardTitle || !cardText || !cardPrice) return;

//         const createLocalStorage = JSON.parse(localStorage.getItem('newBasketCard')) || [];

//         const newBasketCard = {
//             title: cardTitle.textContent,
//             text: cardText.textContent,
//             imgSrc: cardImg.getAttribute('src'),
//             id: 'basket_card-' + Date.now(),
//             price: cardPrice.textContent
//         };

//         createLocalStorage.push(newBasketCard);
//         localStorage.setItem('newBasketCard', JSON.stringify(createLocalStorage));

//         renderBasketCards();
//         console.log('Товар добавлен в корзину');
//     }
// )
// })

// Рендер и создание карты товара
function renderBasketCards() {
    const basketPageInner = document.querySelector('.basket__card-inner');
    if (basketPageInner) {
        basketPageInner.innerHTML = '';
    } else {
        console.error('Элемент basketPageInner перезагружен');
    }
    const createLocalStorage = JSON.parse(localStorage.getItem('newBasketCard')) || [];
    createLocalStorage.forEach(element => {
        const basketSlide = document.createElement('div');
        basketSlide.classList.add('swiper-slide', 'basket__card-slide');
        basketSlide.dataset.id = element.id
        if (basketPageInner) {
            basketPageInner.appendChild(basketSlide);
        } else {
            console.error('Элемент basketPageInner перезагружен')
        }
        const basketCard = document.createElement('div');
        basketCard.classList.add('basket__card');
        basketSlide.appendChild(basketCard);

        const basketImgDiv = document.createElement('div');
        basketImgDiv.classList.add('basket__card__img');
        const basketImg = document.createElement('img');
        basketImg.setAttribute('src', element.imgSrc);
        basketImgDiv.appendChild(basketImg);
        basketCard.appendChild(basketImgDiv);

        const basketTitle = document.createElement('h2');
        basketTitle.textContent = element.title;
        basketTitle.classList.add('basket__card__title');
        basketCard.appendChild(basketTitle);

        const basketDeleteDiv = document.createElement('div');
        basketDeleteDiv.classList.add('basket__card__delete');
        basketCard.appendChild(basketDeleteDiv);

        const basketDelete = document.createElement('img');
        basketDelete.classList.add('basket__card__delete');
        basketDelete.setAttribute('src', 'img/basket.svg');
        basketDeleteDiv.appendChild(basketDelete);

        const basketRange = document.createElement('div');
        basketRange.classList.add('basket__card__range');
        basketCard.appendChild(basketRange);

        const basketMinus = document.createElement('div');
        basketMinus.classList.add('basket__card__range__item', 'basket__minus');
        basketMinus.textContent = '-';
        basketRange.appendChild(basketMinus);

        const basketValue = document.createElement('div');
        basketValue.classList.add('basket__card__range__item', 'basket__value');
        basketValue.textContent = '1';
        basketRange.appendChild(basketValue);

        const basketPlus = document.createElement('div');
        basketPlus.classList.add('basket__card__range__item', 'basket__plus');
        basketPlus.textContent = '+';
        basketRange.appendChild(basketPlus);

        const basketPrice = document.createElement('div');
        basketPrice.classList.add('basket__card__price');
        basketPrice.textContent = element.price.replace('От ', '');
        basketCard.appendChild(basketPrice);
    });

    sumPriceFun()
    basketQuantity()
    basketSlider.update()
}

// Кнопка добавления товара в корзину
document.addEventListener('click', (event) => {
    const i = event.target;

    if (i.classList.contains('purchase__page-btn')) {
        const card = i.closest('.menu__card');
        if (!card) return;

        const cardImg = card.querySelector('.menu__card__img');
        const cardTitle = card.querySelector('.menu__card__title');
        const cardText = card.querySelector('.menu__card__p');
        const cardPrice = card.querySelector('.menu__card__price');

        if (!cardImg || !cardTitle || !cardText || !cardPrice) return;

        const createLocalStorage = JSON.parse(localStorage.getItem('newBasketCard')) || [];

        const newBasketCard = {
            title: cardTitle.textContent,
            text: cardText.textContent,
            imgSrc: cardImg.getAttribute('src'),
            id: 'basket_card-' + Date.now(),
            price: cardPrice.textContent
        };

        createLocalStorage.push(newBasketCard);
        localStorage.setItem('newBasketCard', JSON.stringify(createLocalStorage));

        renderBasketCards();
    }
});
document.addEventListener('DOMContentLoaded', renderBasketCards);

inputPhone.addEventListener('input', (i)=>{
    const inputPhoneValue = i.target.value 
    localStorage.setItem('mainPhone', inputPhoneValue)
})