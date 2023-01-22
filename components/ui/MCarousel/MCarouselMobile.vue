<template>
  <div v-if="numSlides" class="slider-wrapper">
    <!-- <transition-group name="fade" tag="div" class="cars-list">
      
    </transition-group> -->
    <div class="cars-list">
      <!-- car-single -->
      <div class="cars-item" @click="onCarClicked(car)">
        <m-car-without-btn :car="car" :item-flex-class="itemFlexClass" />
      </div>
    </div>

    <div class="slider-dots">
      <div v-for="(btn, i) in slides" :key="btn.id" @click="jumpToSlide(i + 1)">
        <div v-if="i < 10" class="slider-dot" :class="slideDotsClass(i)"></div>
      </div>
    </div>

    <div class="slider-arrows">
      <div @click="moveToSlide(-1)" v-if="active > 1" class="slider-arrow-left">
        <img src="../../../static/images/arrow-right-black.png" alt="" />
      </div>
      <div
        @click="moveToSlide(1)"
        v-if="active < numSlides"
        class="slider-arrow-right"
      >
        <img src="../../../static/images/arrow-right-black.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import MCarWithoutBtn from "../../common/MCarWithoutBtn/MCarWithoutBtn.vue";
export default {
  components: {
    MCarWithoutBtn,
  },
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    itemFlexClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    numSlides() {
      return this.slides.length;
    },
    car() {
      return this.slides[this.active - 1];
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    onCarClicked(car) {
      this.$emit("on-car-clicked", car);
    },
    moveToSlide(amount) {
      let newActive;
      const newIndex = this.active + amount;
      if (newIndex > this.slides.length) {
        newActive = 1;
      }
      if (newIndex === 0) {
        newActive = this.slides.length;
      }
      this.active = null;
      this.active = newActive || newIndex;
      this.$emit("active-changed", this.active);
    },
    jumpToSlide(index) {
      this.active = null;
      this.active = index;
      this.$emit("active-changed", this.active);
    },
    slideDotsClass(i) {
      if (i + 1 !== this.active) {
        return "";
      }
      return "dot__active";
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
