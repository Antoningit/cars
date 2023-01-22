<template>
  <div class="cars-list-wrapper">
    <div class="row">
      <h2>ПРОВЕРЕННЫЕ АВТОМОБИЛИ С ПРОБЕГОМ В НАЛИЧИИ</h2>
      <m-cars-titles-and-imgs :cars="cars" />
      <div class="cars-installment"><m-credit-installment-with-modal /></div>
      <div class="cars-latest">
        <div class="cars-latest__title" v-if="latestCars.length > 0">
          <h2>Последние поступления</h2>
        </div>
        <div class="cars-latest__cars">
          <m-cars :cars="latestCars"></m-cars>
        </div>
      </div>
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
            <button
              class="btn slide-link"
              @click="goToCatalog('carBody=Внедорожник')"
            >
              Выбрать внедорожник
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="cars-list-wrapper__cars-with-filters">
        <h2>Каталог</h2>
        <m-cars-with-filters :cars="cars" />
      </div> -->
      <div class="cars-banner">
        <m-button-with-modal
          :name="$options.static.ButtonCases.CREDIT"
          :is-banner="true"
          :is-no-car="true"
          :cars="cars"
        />
      </div>
      <div class="cars-offers cars-offers-two">
        <div class="cars-slide-out">
          <div class="cars-slide-title mb-1">Внедорожники</div>
          <div class="cars-slide-subtitle mb-1">
            Внедорожники не боятся грязи, дождя и снега. Их владельцы называют
            дорогой любое место, где планируют проехать!
          </div>
          <div class="cars-link">
            <button
              class="btn slide-link"
              @click="goToCatalog('carBody=Внедорожник')"
            >
              Выбрать
            </button>
          </div>
        </div>
        <div class="cars-slide-auto">
          <div class="cars-slide-title mb-1">Автоматическая КПП</div>
          <div class="cars-slide-subtitle mb-1">
            Управляй автомобилем с комфортом и не думай о переключении
            скоростей!
          </div>
          <div class="cars-link">
            <button
              class="btn slide-link"
              @click="goToCatalog('carKpp=Автомат')"
            >
              Выбрать
            </button>
          </div>
        </div>
        <div class="cars-slide-first">
          <div class="cars-slide-title mb-1">Первый автомобиль</div>
          <div class="cars-slide-subtitle mb-1">
            Отличные варианты для начинающих водителей!
          </div>
          <div class="cars-link">
            <button class="btn slide-link" @click="goToCatalog('sort=asc')">
              Выбрать
            </button>
          </div>
        </div>
      </div>
      <div class="cars-offers">
        <div class="cars-slider">
          <m-slider v-bind="sliderOptionsTwo" />
        </div>
        <div class="cars-slide-business">
          <div class="cars-slide-title mb-1">Авто бизнес-класса</div>
          <div class="cars-slide-subtitle mb-1">Лучшие автомобили для VIP</div>
          <div class="cars-link">
            <button class="btn slide-link" @click="goToCatalog('sort=desc')">
              Выбрать
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
import MCarsTitlesAndImgs from "../../common/MCarsTitlesAndImgs/MCarsTitlesAndImgs.vue";
import MSlider from "../../ui/MSlider/MSlider.vue";
import MCreditInstallmentWithModal from "../../ui/MCreditInstallmentWithModal/MCreditInstallmentWithModal.vue";
import MCars from "../../../components/common/MCars/MCars.vue";
import MButtonWithModal from "../../../components/ui/MButtonWithModal/MButtonWithModal.vue";
import {
  SecondarySliderSlides,
  ThirdSliderSlides,
  ButtonCases,
} from "../../../constants";
//import { Cars } from "../../../cars";
export default {
  components: {
    MCarsWithFilters,
    MCarsTitlesAndImgs,
    MSlider,
    MSliderWithLightBox,
    MCreditInstallmentWithModal,
    MCars,
    MButtonWithModal,
  },
  props: {
    cars: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliderOptions: {
        slides: SecondarySliderSlides,
        sliderClass: "second-slide",
      },
      sliderOptionsTwo: {
        slides: ThirdSliderSlides,
        sliderClass: "second-slide",
      },
    };
  },
  static: {
    //Cars,
    ButtonCases,
  },
  computed: {
    latestCars() {
      return this.cars
        .filter(({ latest }) => latest)
        .sort((a, b) => b.id - a.id);
    },
  },
  methods: {
    goToCatalog(value) {
      this.$router.push(`/catalog/?${value}`);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
