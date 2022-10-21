<template>
  <div
    v-if="bannerType === 1"
    @click="$emit('banner-clicked')"
    class="banner-with-credit-modal"
  >
    <div class="banner-with-credit-modal__item">
      <div class="banner-with-credit-modal__item-content item-content mb-1">
        <div class="item-content__img">
          <img src="../../../static/images/credit.png" alt="" />
        </div>
        <div class="item-content__text">
          Выгода до <span>100 000 ₽</span>
          <div>при покупке в кредит</div>
        </div>
      </div>
      <div class="banner-with-credit-modal__item-content item-content">
        <div class="item-content__img">
          <img src="../../../static/images/tradein.png" alt="" />
        </div>
        <div class="item-content__text">
          Выгода до <span>50 000 ₽</span>
          <div>при обмене по Trade-In</div>
        </div>
      </div>
    </div>
    <div class="banner-with-credit-modal__item">
      <div class="banner-with-credit-modal__item-content item-content">
        <div class="item-content__img">
          <img src="../../../static/images/credcalk.png" alt="" />
        </div>
        <div class="item-content__text text">
          Специальные условия для клиентов <span>КРЕДИТНЫЕ КАНИКУЛЫ</span>
          <div class="text__white">до 3-х месяцев</div>
        </div>
      </div>
    </div>
    <div class="banner-with-credit-modal__item">
      <div class="banner-with-credit-modal__item-content item-content mb-1">
        <div class="item-content__img">
          <img src="../../../static/images/zim.png" alt="" />
        </div>
        <div class="item-content__text">
          <span>Зимняя резина + ОСАГО</span>
          <div>за онлайн-заявку на автокредит</div>
        </div>
      </div>
      <div class="banner-with-credit-modal__item-content item-content">
        <div class="item-content__img">
          <img src="../../../static/images/98.png" alt="" />
        </div>
        <div class="item-content__text">
          Одобрение банков
          <span>98%</span>
          <div>при взносе от 20%</div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else-if="bannerType === 2"
    class="car-card__promo card-promo"
    @click="$emit('banner-clicked')"
  >
    <div class="card-promo__month promo-month">
      <div class="promo-month__title">Только в {{ currentMonth }}</div>
      <div class="promo-month__subtitle">
        Максимальные <strong>скидки</strong> на {{ car.title }}
        {{ car.model }}
      </div>
      <div class="promo-month__credit">
        Кредит / Рассрочка / Выгодный Trade-In
      </div>
    </div>
    <div class="card-promo__additional promo-additional">
      <div class="promo-additional__flex">
        <div class="promo-additional__text">
          <div class="promo-additional__title">Дополнительная скидка</div>
          <div class="promo-additional__subtitle">
            До <strong>100 000 ₽</strong> при покупке
          </div>
          <div class="promo-additional__credit">
            <strong>В кредит!</strong>
          </div>
        </div>
        <div class="promo-additional__img">
          <img src="../../../static/images/cred_bn.png" alt="" />
        </div>
      </div>
    </div>
    <div class="card-promo__guarantee promo-guarantee">
      <div class="promo-guarantee__flex">
        <div class="promo-guarantee__img">
          <img src="../../../static/images/garantie.png" alt="" />
        </div>
        <div class="promo-guarantee__title">1 год гарантии!</div>
      </div>
      <div class="promo-guarantee__bottom guarantee-bottom">
        <div class="guarantee-bottom__title">Предложение действует</div>
        <div class="guarantee-bottom__subtitle">
          До 31 {{ currentMonthOther }}
        </div>
      </div>
    </div>
  </div>
  <div
    class="banner-gift"
    v-else-if="bannerType === 3"
    @click="$emit('banner-clicked')"
  >
    <img src="../../../static/images/pdr.jpg" alt="" />
  </div>
  <div
    v-else-if="bannerType === 4"
    class="banner-images"
    @click="$emit('banner-clicked')"
  >
    <div class="banner-images__img-wrapper">
      <img src="../../../static/images/1.jpg" alt="" />
    </div>
    <div class="banner-images__img-wrapper">
      <img src="../../../static/images/2.jpg" alt="" />
    </div>
    <div class="banner-images__img-wrapper">
      <img src="../../../static/images/3.jpg" alt="" />
    </div>
    <div class="banner-images__img-wrapper">
      <img src="../../../static/images/4.jpg" alt="" />
    </div>
  </div>
  <div class="banner-tyres" v-else @click="$emit('banner-clicked')">
    <div class="banner-tyres__title">Продленная гарантия</div>
    <div class="banner-tyres__subtitle">На все наши автомобили</div>
    <div class="banner-tyres__img">
      <img src="../../../static/images/car_rz-cropped.png" alt="" />
    </div>
    <div class="banner-tyres__gift">+ Зимняя резина</div>
    <div class="banner-tyres__btn">
      <span class="btn callback-btn">В подарок</span>
    </div>
  </div>
</template>

<script>
import { Months, MonthsOther } from "../../../constants";
export default {
  props: {
    bannerType: {
      type: Number,
      default: 1,
    },
    car: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    currentMonth() {
      return Months[new Date().getMonth()];
    },
    currentMonthOther() {
      return MonthsOther[new Date().getMonth()];
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
