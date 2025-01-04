new Swiper ('.basket-main__optional__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    freeMode: true,
    spaceBetween: 20,
})
const basketLinkForward = document.querySelector('.basket-main__actions__link-forward')
const whereToDeliver = document.querySelector('.where-to-deliver')
basketLinkForward.addEventListener('click', ()=>{
    whereToDeliver.classList.add('active')
    blackout.classList.add('active')
    body.classList.add('active')
})
const body = document.querySelector('body')
const blackout = document.querySelector('.blackout')
blackout.addEventListener('click', () => {
    blackout.classList.remove('active')
    body.classList.remove('active')
    whereToDeliver.classList.remove('active')
    deliveryTime.classList.remove('active')
})
const whereToDeliverBtn = document.querySelector('.where-to-deliver__btn')
const deliveryTime = document.querySelector('.delivery-time')
whereToDeliverBtn.addEventListener('click', ()=>{
    whereToDeliver.classList.remove('active')
    blackout.classList.add('active')
    body.classList.add('active')
    deliveryTime.classList.add('active')
})

deliveryTime.addEventListener('click', (event)=>{
    const i = event.target
    if (i.classList.contains("delivery-time__radio")) {
        if (i.checked) {
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

const createSessionStorage = JSON.parse(sessionStorage.getItem('newBasketCard')) || [];
const catalog = document.querySelector('.basket-main__catalog')
createSessionStorage.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('basket-main__catalog-card')
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