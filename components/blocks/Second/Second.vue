<template>
  <div class="cars-list-wrapper">
    <div class="row">
      <h2>ПРОВЕРЕННЫЕ АВТОМОБИЛИ С ПРОБЕГОМ В НАЛИЧИИ</h2>
      <m-credit-installment-with-modal />
      <m-cars-with-filters :cars="$options.static.Cars" />

      <m-slider-with-light-box />

      <div class="cars-offers">
        <div class="cars-slider">
          <m-slider v-bind="sliderOptions" />
        </div>
        <div class="cars-slide">
          <div class="cars-slide-title mb-1">Неделя внедорожников</div>
          <div class="cars-slide-subtitle mb-1">
            Скидка на все внедорожники до конца недели
          </div>
          <div class="cars-link">
            <button class="btn slide-link" @click="goToCatalog()">
              Выбрать внедорожник
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MCarsWithFilters from "../../common/MCarsWithFilters/MCarsWithFilters.vue";
import MSliderWithLightBox from "../../ui/MSliderWithLightBox/MSliderWithLightBox.vue";
import MSlider from "../../ui/MSlider/MSlider.vue";
import MCreditInstallmentWithModal from "../../ui/MCreditInstallmentWithModal/MCreditInstallmentWithModal.vue";
import { SecondarySliderSlides, ButtonCases } from "../../../constants";
import { Cars } from "../../../cars";
export default {
  components: {
    MCarsWithFilters,
    MSlider,
    MSliderWithLightBox,
    MCreditInstallmentWithModal,
  },
  data() {
    return {
      sliderOptions: {
        slides: SecondarySliderSlides,
        sliderClass: "second-slide",
      },
    };
  },
  static: {
    Cars,
    ButtonCases,
  },
  computed: {},
  methods: {
    goToCatalog() {
      this.$router.push(`/catalog/?carBody=Внедорожник`);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>