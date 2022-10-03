<template>
  <div v-if="numSlides" class="slider-wrapper">
    <cool-light-box
      :items="imagesToLightBox"
      :index="index"
      loop
      @close="index = null"
    ></cool-light-box
    ><transition name="fade" mode="out-in">
      <div class="slider__slide">
        <img @click="setIndex(active - 1)" :src="activeSlide" alt="" />
      </div>
    </transition>

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

    <div class="slider-dots">
      <div
        class="slider-dot"
        v-for="(btn, i) in slides"
        :key="i"
        @click="jumpToSlide(i + 1)"
        :class="slideDotsClass(i)"
      >
        <img :src="btn" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CoolLightBox,
  },
  computed: {
    activeSlide() {
      return this.slides[this.active - 1];
    },
    numSlides() {
      return this.slides.length;
    },
    imagesToLightBox() {
      return this.slides.map((slide) => ({ src: slide, title: slide }));
    },
  },
  data() {
    return {
      active: 1,
      index: null,
    };
  },
  methods: {
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
    },
    jumpToSlide(index) {
      this.active = null;
      this.active = index;
    },
    slideDotsClass(i) {
      if (i + 1 !== this.active) {
        return "";
      }
      return "dot__active";
    },
    setIndex(index) {
      this.index = index;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>