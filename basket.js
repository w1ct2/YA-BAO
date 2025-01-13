new Swiper ('.basket-main__optional__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    freeMode: true,
    spaceBetween: 20,
})
const basketLinkForward = document.querySelector('.basket-main__actions__link-forward')
const whereToDelivery = document.querySelector('.where-to-deliver')
basketLinkForward.addEventListener('click', ()=>{
    whereToDelivery.classList.add('active')
    blackout.classList.add('active')
    body.classList.add('active')
})
const body = document.querySelector('body')
const blackout = document.querySelector('.blackout')
blackout.addEventListener('click', () => {
    blackout.classList.remove('active')
    body.classList.remove('active')
    whereToDelivery.classList.remove('active')
    deliveryTime.classList.remove('active')
})
const whereToDeliveryBtn = document.querySelector('.where-to-deliver__btn')
const deliveryTime = document.querySelector('.delivery-time')
whereToDeliveryBtn.addEventListener('click', ()=>{
    whereToDelivery.classList.remove('active')
    blackout.classList.add('active')
    body.classList.add('active')
    deliveryTime.classList.add('active')
})

deliveryTime.addEventListener('click', (event)=>{
    const i = event.target
    if (i.classList.contains("delivery-time__radio")) {
        if (i.checked) {
            const label = document.querySelector(`label[for="${i.id}"]`);
            const labelText = label.textContent
            sessionStorage.setItem('time', labelText)
            window.location.href = 'delivery.html'
        }
    }
})

const basketMainCatalog = document.querySelector('.basket-main__catalog')
basketMainCatalog.addEventListener('click', (event) => {
    const i = event.target;
    // console.log(i)
    if (i.classList.contains('basket-main__catalog-card__range__item-minus') || i.classList.contains('basket-main__catalog-card__range__item-plus')) {
        const card = i.closest('.basket-main__catalog-card') 
        const price = card.querySelector('.basket-main__catalog-card__price')
        if (!price.dataset.initialPrice) {
            price.dataset.initialPrice = price.textContent;
        }
        const intPriceConst = parseInt(price.dataset.initialPrice);
        let intPrice = parseInt(price.textContent)
        const value = card.querySelector('.basket-main__catalog-card__range__item-value')
        let intValue = parseInt(value.textContent)
        if (i.classList.contains('basket-main__catalog-card__range__item-plus')) {
            intValue += 1
            
            intPrice += intPriceConst
        } else if (i.classList.contains('basket-main__catalog-card__range__item-minus') && intValue > 1) {
            intValue -= 1
            intPrice -= intPriceConst
        }
        value.textContent = `${intValue}`
        price.textContent = `${intPrice} ₽`
        sumPriceFun()
    }
    if (i.classList.contains('basket__card__delete')) {
        const card = i.closest('.basket-main__catalog-card') 
        const cardId = card.dataset.id
        let basketData = JSON.parse(localStorage.getItem('newBasketCard')) || [];
        basketData = basketData.filter(item => item.id !== cardId);
        localStorage.setItem('newBasketCard', JSON.stringify(basketData));
        card.remove()
        sumPriceFun()
    }
})

function sumPriceFun() {
    const priceList = document.querySelectorAll('.basket-main__catalog-card__price')
    let total = 0
    priceList.forEach((priceEl)=>{
        const priceText = priceEl.textContent.replace('₽', '').trim();
        const price = parseInt(priceText)
        total += price
    })
    const sumPrice = document.querySelector('.basket-main__actions__price span')
    sumPrice.textContent = `${total} ₽`
}
sumPriceFun()

const createLocalStorage = JSON.parse(localStorage.getItem('newBasketCard')) || [];
const catalog = document.querySelector('.basket-main__catalog')
createLocalStorage.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('basket-main__catalog-card')
    card.dataset.id = element.id

    const cardImg = document.createElement('div')
    cardImg.classList.add('basket-main__catalog-card__img')
    const cardImgSrc = document.createElement('img')
    cardImgSrc.setAttribute('src', element.imgSrc)
    cardImg.appendChild(cardImgSrc)
    card.appendChild(cardImg)

    const cardTitle = document.createElement('h3')
    cardTitle.classList.add('basket-main__catalog-card__title')
    cardTitle.textContent = element.title
    card.appendChild(cardTitle);
    
    const cardText = document.createElement('p')
    cardText.classList.add('basket-main__catalog-card__p')
    cardText.textContent = element.text
    card.appendChild(cardText)

    const cardPrice = document.createElement('div')
    cardPrice.classList.add('basket-main__catalog-card__price')
    cardPrice.textContent = element.price.replace('От ', '')
    card.appendChild(cardPrice)


    const range = document.createElement('div')
    range.classList.add('basket__card__range', 'basket-main__catalog-card__range')
    card.appendChild(range)

    const minus = document.createElement('div')
    minus.classList.add('basket__card__range__item', 'basket__minus', 'basket-main__catalog-card__range__item-minus')
    minus.textContent = '-'
    range.appendChild(minus)

    const value = document.createElement('div')
    value.classList.add('basket__card__range__item', 'basket__value', 'basket-main__catalog-card__range__item-value')
    value.textContent = '1'
    range.appendChild(value)

    const plus = document.createElement('div')
    plus.classList.add('basket__card__range__item', 'basket__plus', 'basket-main__catalog-card__range__item-plus')
    plus.textContent = '+'
    range.appendChild(plus)


    const cardDelete = document.createElement('div')
    cardDelete.classList.add('basket__card__delete', 'basket-main__catalog-card__delete')
    const cardDeleteImg = document.createElement('img')
    cardDeleteImg.classList.add('basket__card__delete')
    cardDeleteImg.setAttribute('src', 'img/basket.svg')
    card.appendChild(cardDelete)
    cardDelete.appendChild(cardDeleteImg)

    catalog.appendChild(card);
    sumPriceFun()
})

const whereToDeliveryInput = document.getElementById('where-to-deliver__form-main-1')
whereToDeliveryInput.addEventListener('input', (i)=>{
    const inputValue = i.target.value
    sessionStorage.setItem('address', inputValue)
})

document.addEventListener('DOMContentLoaded', ()=>{
    if (sessionStorage.getItem('address-active')) {
        whereToDelivery.classList.add(sessionStorage.getItem('address-active'))
        blackout.classList.add(sessionStorage.getItem('address-active'))
        whereToDeliveryInput.focus()
        sessionStorage.removeItem('address-active', 'active')
    }
})
document.addEventListener('DOMContentLoaded', ()=>{
    if (sessionStorage.getItem('time-active')) {
        deliveryTime.classList.add(sessionStorage.getItem('time-active'))
        blackout.classList.add(sessionStorage.getItem('time-active'))
        sessionStorage.removeItem('time-active', 'active')
    }
})
const optional = document.querySelector('.optional__wrapper')
optional.addEventListener('click', (event)=>{
    const card = event.target.closest('.basket-main__optional__item')
    if (card) {
        const priceElement = card.querySelector('.optional__price')
        const price = parseInt(priceElement.textContent.replace('₽', '').replace('От', ''))
        let finalPrice = document.querySelector('.basket-main__actions__price span')
        let currentPrice = parseInt(finalPrice.textContent)
        if (card.classList.contains('selected')) {
            card.classList.remove('selected'); 
            currentPrice += price;
            sumPriceFun()
        } else {
            card.classList.add('selected'); 
            currentPrice -= price; 
            sumPriceFun()
        }

        finalPrice.textContent = `${currentPrice} ₽`;
    }

})

const basketSauce = document.querySelector('.basket-main__sauce__container')
basketSauce.addEventListener('click', (event)=>{
    const card = event.target.closest('.sause-label')
    if (card) {
        const priceElement = card.querySelector('.basket-main__sauce__price')
        const price = parseInt(priceElement.textContent.replace('₽', ''))
        let finalPrice = document.querySelector('.basket-main__actions__price span')
        let currentPrice = parseInt(finalPrice.textContent.replace('₽', ''))
        if (card.classList.contains('selected')) {
            card.classList.remove('selected'); 
            currentPrice += price;
            sumPriceFun()
        } else {
            card.classList.add('selected'); 
            currentPrice -= price; 
            sumPriceFun()
        }

        finalPrice.textContent = `${currentPrice} ₽`;
    }
})