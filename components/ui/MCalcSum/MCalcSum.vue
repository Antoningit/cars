<template>
  <div class="calc-sum">
    <img
      class="calc-sum__img"
      src="../../../static/images/trade-in-calc.jpeg"
      alt=""
    />
    <div class="calc-sum__text text">
      Ваша цена со скидкой по программе <strong>TRADE-IN</strong>
      <span class="text__span">{{ carPriceWithSale }} ₽</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carPrice: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    carPriceWithSale() {
      const percentPrice = this.carPrice * 0.15;
      return (this.carPrice - percentPrice).toLocaleString();
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
