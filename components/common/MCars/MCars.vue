<template>
  <div>
    <transition-group name="fade" tag="div" class="cars-list">
      <div
        v-for="(car, index) in cars"
        v-show="index < maxCardsShownCount"
        :key="car.id"
        class="cars-item"
      >
        <m-car :car="car" />
      </div>
    </transition-group>
    <div class="center-div" v-if="maxCardsShownCount < cars.length">
      <button class="btn show-more-btn" @click="increaseMaxToShow(4)">
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
      default: 4,
    },
  },
  components: {
    MCar,
  },
  data() {
    return {
      maxCardsShownCount: 4,
    };
  },
  watch: {
    maxCardsShownCountProp: {
      handler() {
        this.setMaxCardsShownCount();
      },
    },
  },
  methods: {
    increaseMaxToShow(count) {
      this.maxCardsShownCount += count;
      this.$emit("max-cards-shown-changed", this.maxCardsShownCount);
    },
    setMaxCardsShownCount() {
      if (this.maxCardsShownCountProp !== 4) {
        return;
      }
      this.maxCardsShownCount = this.maxCardsShownCountProp;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>