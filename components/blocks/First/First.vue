<template>
  <div>
    <div class="main">
      <div class="main-content">
        <m-slider v-bind="sliderOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import MSlider from "../../ui/MSlider/MSlider.vue";
import { ButtonCases, MainSliderSlides } from "../../../constants";
export default {
  components: {
    MSlider,
  },
  data() {
    return {
      sliderOptions: {
        slides: MainSliderSlides,
        sliderClass: "first-slide",
      },
    };
  },
  static: {
    ButtonCases,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>