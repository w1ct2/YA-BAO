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
const deliveryTimeRadio1 = document.getElementById('delivery-time__radio-1')
const deliveryTimeRadio2 = document.getElementById('delivery-time__radio-2')
const deliveryTimeRadio3 = document.getElementById('delivery-time__radio-3')
const deliveryTimeRadio4 = document.getElementById('delivery-time__radio-4')
const deliveryTimeRadio5 = document.getElementById('delivery-time__radio-5')
const deliveryTimeRadio6 = document.getElementById('delivery-time__radio-6')
const deliveryTimeRadio7 = document.getElementById('delivery-time__radio-7')
const deliveryTimeRadio8 = document.getElementById('delivery-time__radio-8')
const deliveryTimeRadio9 = document.getElementById('delivery-time__radio-9')
const deliveryTimeRadio10 = document.getElementById('delivery-time__radio-10')
deliveryTimeRadio1.addEventListener('change', ()=>{
    if (deliveryTimeRadio1.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio2.addEventListener('change', ()=>{
    if (deliveryTimeRadio2.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio3.addEventListener('change', ()=>{
    if (deliveryTimeRadio3.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio4.addEventListener('change', ()=>{
    if (deliveryTimeRadio4.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio5.addEventListener('change', ()=>{
    if (deliveryTimeRadio5.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio6.addEventListener('change', ()=>{
    if (deliveryTimeRadio6.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio7.addEventListener('change', ()=>{
    if (deliveryTimeRadio7.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio8.addEventListener('change', ()=>{
    if (deliveryTimeRadio8.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio9.addEventListener('change', ()=>{
    if (deliveryTimeRadio9.checked) {
        window.location.href = 'delivery.html'
    }
})
deliveryTimeRadio10.addEventListener('change', ()=>{
    if (deliveryTimeRadio10.checked) {
        window.location.href = 'delivery.html'
    }
})