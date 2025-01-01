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



{/* <div class="swiper-slide basket__card-slide">
    <div class="basket__card" id="basket__card-1">
        <div class="basket__card__img"><img src="img/pizza1.png" alt=""></></div>
        <div class="basket__card__title">С креветками и трюфелями</div>
        <div class="basket__card__delete">
            <img src="img/basket.svg" alt="" class="basket__card__delete">
            </></div>
        <div class="basket__card__range">
            <div class="basket__card__range__item basket__minus">-</div>
            <div class="basket__card__range__item basket__value">1</div>
            <div class="basket__card__range__item basket__plus">+</div>
        </div>
        <div class="basket__card__price">700 ₽</div>
    </div>
</div>
<div class="swiper-slide basket__card-slide">
    <div class="basket__card" id="basket__card-2">
        <div class="basket__card__img"><img src="img/pasta2.png" alt=""></div>
        <div class="basket__card__title">С креветками и трюфелями</div>
        <div class="basket__card__delete" class="basket__card__delete">
            <img src="img/basket.svg" alt="" class="basket__card__delete">
        </div>
        <div class="basket__card__range">
            <div class="basket__card__range__item basket__minus">-</div>
            <div class="basket__card__range__item basket__value">1</div>
            <div class="basket__card__range__item basket__plus">+</div>
        </div>
        <div class="basket__card__price">233 ₽</div>
</div>
<div class="swiper-slide basket__card-slide">
    <div class="basket__card" id="basket__card-3">
        <div class="basket__card__img"><img src="img/antipasts.png" alt=""></div>
        <div class="basket__card__title">С креветками и трюфелями</div>
        <div class="basket__card__delete">
            <img src="img/basket.svg" alt="" class="basket__card__delete">
        </div>
        <div class="basket__card__range">
            <div class="basket__card__range__item basket__minus">-</div>
            <div class="basket__card__range__item basket__value">1</div>
            <div class="basket__card__range__item basket__plus">+</div>
        </div>
        <div class="basket__card__price">444 ₽</div>
</div>
<div class="swiper-slide basket__card-slide">
    <div class="basket__card" id="basket__card-4">
        <div class="basket__card__img"><img src="img/soup.png" alt=""></div>
        <div class="basket__card__title">С креветками и трюфелями</div>
        <div class="basket__card__delete">
            <img src="img/basket.svg" alt="" class="basket__card__delete">
        </div>
        <div class="basket__card__range">
            <div class="basket__card__range__item basket__minus">-</div>
            <div class="basket__card__range__item basket__value">1</div>
            <div class="basket__card__range__item basket__plus">+</div>
        </div>
        <div class="basket__card__price">385 ₽</div>
</div>
<div class="swiper-slide basket__card-slide">
    <div class="basket__card" id="basket__card-5">
        <div class="basket__card__img"><img src="img/soup2.png" alt=""></div>
        <div class="basket__card__title">С креветками и трюфелями</div>
        <div class="basket__card__delete">
            <img src="img/basket.svg" alt="" class="basket__card__delete">
        </div>
        <div class="basket__card__range">
            <div class="basket__card__range__item basket__minus">-</div>
            <div class="basket__card__range__item basket__value">1</div>
            <div class="basket__card__range__item basket__plus">+</div>
        </div>
        <div class="basket__card__price">375 ₽</div>
    </div>
</div> */}