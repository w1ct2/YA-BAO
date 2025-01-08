const catalogSlider = new Swiper ('.form-composition-catalog', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    mousewheel: {
        sensitivity: 1,
    },
    direction: 'vertical',
    spaceBetween: 20,
    observer: true,
})
const paymentMethodFormCard2 = document.getElementById('payment__method-form__card-2')
const paymentMethodFormCard1 = document.getElementById('payment__method-form__card-1')
const paymentMethodFormCard = document.querySelector('.payment__method-form__card')
const paymentMethodFormCash = document.querySelector('.payment__method-form__cash')
if (paymentMethodFormCard1) {
    paymentMethodFormCard1.addEventListener('change', () => {
        if (paymentMethodFormCard1.checked) {
            paymentMethodFormCard.style.display = 'grid'
            paymentMethodFormCash.style.display = 'none'
        }
    });
}
if (paymentMethodFormCard2) {
    paymentMethodFormCard2.addEventListener('change', () => {
        if (paymentMethodFormCard2.checked) {
            paymentMethodFormCash.style.display = 'flex'
            paymentMethodFormCard.style.display = 'none'
        }
    });
}

const createSessionStorage = JSON.parse(sessionStorage.getItem('newBasketCard')) || [];
const catalog = document.querySelector('.form-composition-catalog')
const catalogInner = document.querySelector('.form-composition-catalog__inner')
createSessionStorage.forEach(element => {
    const card = document.createElement('div')
    card.classList.add('form-composition-catalog-item', 'swiper-slide')
    card.dataset.id = element.id
    catalogInner.appendChild(card)

    const catalogTitle = document.createElement('h4')
    catalogTitle.textContent = element.title
    card.appendChild(catalogTitle)

    const catalogText = document.createElement('p')
    catalogText.textContent = element.text
    card.appendChild(catalogText)

    const catalogPrice = document.createElement('div')
    catalogPrice.textContent = element.price.replace('От ', '')
    card.appendChild(catalogPrice)
    
    catalogSlider.update()
})

function sumPriceFun() {
    const priceList = document.querySelectorAll('.form-composition-catalog-item div')
    let total = 0
    priceList.forEach((priceEl)=>{
        const priceText = priceEl.textContent.replace('₽', '').trim();
        const price = parseInt(priceText)
        total += price
    })
    const sumPrice = document.querySelector('.form-composition__price span')
    sumPrice.textContent = `${total} ₽`

    const sumPriceBtn = document.querySelector('.payment__method-link-forward span')
    sumPriceBtn.textContent = `${total} ₽`
}
sumPriceFun()