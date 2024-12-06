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