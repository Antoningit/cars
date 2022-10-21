<template>
  <div class="catalog">
    <div class="row">
      <div class="catalog__banner">
        <m-button-with-modal
          :name="$options.static.ButtonCases.CREDIT"
          :is-banner="true"
          :is-no-car="true"
          :cars="cars"
        />
      </div>
      <div class="catalog__title">
        <h1 v-if="cars.length > 0">
          Купить автомобиль с пробегом в Москве в кредит ({{
            cars.length
          }}
          авто в наличии)
        </h1>
      </div>
      <div class="catalog__p mt-1">
        Продажа авто с пробегом в Москве. Выгодный автокредит. Рассрочка 0%.
        Характеристики и цены на подержанные автомобили: удобно выбрать и очень
        легко купить б/у автомобили. Все автомобили прошли все необходимые
        технические диагностики и предпродажную подготовку.
      </div>
      <div class="catalog__cars">
        <m-cars-with-filters :cars="cars" />
      </div>
    </div>
    <m-form :form-type="2" />
    <div class="catalog__special-offer special-offer">
      <div class="row">
        <div v-if="promoCars.length > 0">
          <h2>Спецпредложения</h2>
          <m-cars-with-owl-carousel :cars="promoCars" :is-promo="true" />
        </div>
        <div class="special-offer__installment">
          <m-credit-installment-with-modal />
        </div>
        <div class="special-offer__latest" v-if="latestCars.length > 0">
          <h2>Последние поступления</h2>
          <m-cars-with-owl-carousel :cars="latestCars" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MButtonWithModal from "../../components/ui/MButtonWithModal/MButtonWithModal.vue";
import MCarsWithFilters from "../../components/common/MCarsWithFilters/MCarsWithFilters.vue";
import MCarsWithOwlCarousel from "../../components/common/MCarsWithOwlCarousel/MCarsWithOwlCarousel.vue";
import MCreditInstallmentWithModal from "../../components/ui/MCreditInstallmentWithModal/MCreditInstallmentWithModal.vue";
import MForm from "../../components/ui/MForm/MForm.vue";
import { ButtonCases } from "../../constants";
//import { Cars } from "../../cars";
export default {
  components: {
    MButtonWithModal,
    MCarsWithFilters,
    MCarsWithOwlCarousel,
    MCreditInstallmentWithModal,
    MForm,
  },
  static: {
    //Cars,
    ButtonCases,
  },
  async created() {
    if (this.cars.length === 0) {
      await this.$store.dispatch("getCars");
    }
  },
  computed: {
    cars() {
      return this.$store.getters.CARS;
    },
    promoCars() {
      return this.cars.filter(({ promo }) => promo === "Да");
    },
    latestCars() {
      return this.cars.filter(({ latest }) => latest === "Да");
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
