<template>
  <div class="special-offers row">
    <h2>Спецпредложения</h2>
    <m-cars-with-owl-carousel :cars="promoCars" :is-promo="true" />
  </div>
</template>

<script>
import MCarsWithOwlCarousel from "../../../components/common/MCarsWithOwlCarousel/MCarsWithOwlCarousel.vue";
import { Cars } from "../../../cars";
export default {
  components: {
    MCarsWithOwlCarousel,
  },
  static: {
    Cars,
  },
  computed: {
    promoCars() {
      return Cars.filter(({ is_promo: isPromo }) => isPromo);
    },
  },
};
</script>


<style lang="scss" src="./style.scss" scoped></style>