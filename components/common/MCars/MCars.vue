<template>
  <div>
    <transition-group name="fade" tag="div" class="cars-list">
      <div
        v-for="(car, index) in cars"
        v-show="index < maxCardsShownCount"
        :key="car.id"
        class="cars-item"
      >
        <m-car :car="car" :cars="cars" />
      </div>
    </transition-group>
    <div class="center-div" v-if="maxCardsShownCount < carsMeta">
      <button class="btn show-more-btn" @click="increaseMaxToShow(16)">
        Показать еще
      </button>
    </div>
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
    maxCardsShownCountProp: {
      type: Number,
      default: 16,
    },
  },
  components: {
    MCar,
  },
  data() {
    return {
      maxCardsShownCount: 16,
    };
  },
  computed: {
    carsMeta() {
      const carsMeta = this.$store.getters.CARS_META;
      if (carsMeta === null) {
        return 0;
      }
      return Object.values(carsMeta).reduce((acc, value) => acc + value, 0);
    },
  },
  watch: {
    maxCardsShownCountProp: {
      immediate: true,
      handler() {
        this.setMaxCardsShownCount();
      },
    },
  },
  methods: {
    increaseMaxToShow(count) {
      this.maxCardsShownCount += count;
      this.$emit("max-cards-shown-changed", 16);
    },
    setMaxCardsShownCount() {
      /* if (this.maxCardsShownCountProp !== 16) {
        return;
      } */
      this.maxCardsShownCount = this.maxCardsShownCountProp;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
