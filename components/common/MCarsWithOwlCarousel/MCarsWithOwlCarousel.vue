<template>
  <div v-if="cars.length > 0" class="custom-owl-carousel">
    <carousel v-bind="carouselOptions" :key="refreshToken">
      <div v-for="car in cars" :key="car.id" class="cars-item">
        <m-car :car="car" :cars="cars" :is-promo="isPromo" />
      </div>
      <template slot="prev"
        ><span class="arrow-left">
          <img
            src="../../../static/images/arrow-right-black.png"
            alt="" /></span
      ></template>
      <template slot="next"
        ><span class="arrow-right"
          ><img
            src="../../../static/images/arrow-right-black.png"
            alt="" /></span
      ></template>
    </carousel>
  </div>
</template>

<script>
import MCar from "../../common/MCar/MCar.vue";
export default {
  props: {
    cars: {
      type: Array,
      default: () => [],
    },
    isPromo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MCar,
  },
  watch: {
    cars: {
      handler() {
        this.refreshToken += 1;
      },
    },
  },
  data() {
    return {
      refreshToken: 0,
      carouselOptions: {
        responsive: {
          1024: { items: 4, margin: 20, nav: false, dots: false },
          768: { items: 2, margin: 20, nav: false, dots: false },
          425: { items: 1, margin: 0, nav: false, dots: false },
          375: { items: 1, margin: 0, nav: false, dots: false },
          320: { items: 1, margin: 0, nav: false, dots: false },
        },
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
