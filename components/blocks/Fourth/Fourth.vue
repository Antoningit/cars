<template>
  <div class="special-offers row">
    <h2>Спецпредложения</h2>
    <m-cars-with-owl-carousel :cars="promoCars" :is-promo="true" />
  </div>
</template>

<script>
import MCarsWithOwlCarousel from "../../../components/common/MCarsWithOwlCarousel/MCarsWithOwlCarousel.vue";
//import { Cars } from "../../../cars";
export default {
  components: {
    MCarsWithOwlCarousel,
  },
  props: {
    cars: {
      type: Array,
      default: () => [],
    },
  },
  static: {
    //Cars,
  },
  computed: {
    promoCars() {
      return this.cars.filter(({ promo }) => promo === "Да");
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
