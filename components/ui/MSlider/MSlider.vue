<template>
  <div v-if="numSlides" class="slider-wrapper">
    <transition name="fade" mode="out-in">
      <div
        class="slider__slide"
        :key="activeSlide.id"
        :style="{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${activeSlide.img}) no-repeat center`,
          backgroundSize: 'cover',
        }"
        :class="sliderClass"
        @click.self="moveToSlide(1)"
      >
        <div class="slide-content row">
          <div @click="moveToSlide(1)">
            <h1 class="slide-title mb-1">
              {{ activeSlide.name }}
            </h1>
            <p class="slide-description mb-2">
              {{ activeSlide.description }}
            </p>
            <ul class="slide-list">
              <li v-for="li in activeSlide.content" :key="li">
                {{ li }}
              </li>
            </ul>
            <nuxt-link class="slide-link" :to="activeSlide.btnLink">{{
              activeSlide.btnText
            }}</nuxt-link>
          </div>
        </div>
      </div>
    </transition>

    <div class="slider-dots">
      <div
        class="slider-dot"
        v-for="(btn, i) in slides"
        :key="btn.id"
        @click="jumpToSlide(i + 1)"
        :class="slideDotsClass(i)"
      ></div>
    </div>

    <div class="slider-arrows">
      <div @click="moveToSlide(-1)" v-if="active > 1" class="slider-arrow-left">
        <img src="../../../static/images/arrow-right.png" alt="" />
      </div>
      <div
        @click="moveToSlide(1)"
        v-if="active < numSlides"
        class="slider-arrow-right"
      >
        <img src="../../../static/images/arrow-right.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    sliderClass: {
      type: String,
      default: "",
    },
  },
  created() {
    const intervalId = setInterval(() => {
      this.moveToSlide(1);
    }, 6000);
    this.$once("hook:beforeDestroy", () => clearInterval(intervalId));
  },
  computed: {
    activeSlide() {
      return this.slides[this.active - 1];
    },
    numSlides() {
      return this.slides.length;
    },
  },
  data() {
    return {
      active: 1,
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
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>