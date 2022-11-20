<template>
  <!-- car-single -->
  <div class="cars-item">
    <div v-if="isPromo" class="cars-item__special-offer">
      <img src="../../../static/images/special-offer.png" alt="" />
    </div>
    <div class="cars-item__img">
      <img :src="car.image" alt="" />
    </div>
    <div class="cars-item__text">
      <div class="cars-item__title">
        {{ car.title }}
      </div>
      <div class="cars-item__model">{{ car.model }}</div>
      <div class="cars-item__flex-img flex-img">
        <div class="flex-img__text">
          <div class="cars-item__mod">
            {{ car.mod }}
          </div>
          <div class="cars-item__kpp">
            <span>{{ car.kpp }}</span>
            <span>{{ car.engine }}</span>
          </div>
          <div class="cars-item__year-from">{{ car.year_from }} г.в.</div>
        </div>
        <div class="flex-img__img-wrapper">
          <img class="flex-img__img" :src="carTitleImgLink" alt="" />
        </div>
      </div>
      <div class="cars-item__mileage">{{ car.mileage }} км.</div>
      <div class="cars-item__flex item-flex" :class="itemFlexClass">
        <div class="item-flex__item">
          <div class="cars-item__old-price">{{ carOldPrice }} ₽</div>
          <div class="cars-item__price">{{ carPrice }} ₽</div>
        </div>
        <div class="item-flex__item">
          <div class="cars-item__credit-text-name-title">В кредит от</div>
          <div class="cars-item__credit-text-name">
            {{ creditTextName }}
          </div>
        </div>
      </div>
      <div class="cars-item__buttons item-buttons">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { CarsTitlesWithImgs } from "../../../constants";
export default {
  props: {
    car: {
      type: Object,
      default: () => {},
    },
    itemFlexClass: {
      type: String,
      default: "",
    },
    isPromo: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    creditTextName() {
      const i = 8.5 / 12 / 100;
      const period = 7;
      const koef =
        (i * Math.pow(1 + i, period * 12)) / (Math.pow(1 + i, period * 12) - 1);
      const result = this.car.price * koef;
      return `от ${result.toFixed()} ₽ / мес.`;
    },
    carPrice() {
      return Number(this.car.price).toLocaleString();
    },
    carOldPrice() {
      return Number(this.car.old_price).toLocaleString();
    },
    carTitleImgLink() {
      return (
        CarsTitlesWithImgs[this.car.title.replace(/ /g, "_").toUpperCase()]
          ?.img ?? ""
      );
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
