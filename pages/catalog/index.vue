<template>
  <div class="catalog">
    <div class="row">
      <div class="catalog__banner">
        <m-button-with-modal
          :name="$options.static.ButtonCases.CREDIT"
          :is-banner="true"
          :is-no-car="true"
        />
      </div>
      <div class="catalog__title">
        <h1 v-if="carsMeta > 0">
          Купить автомобиль с пробегом в Москве в кредит ({{ carsMeta }}
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
        <!-- 
        <div v-if="isLoading" class="lds-dual-ring"></div> -->
        <m-cars-with-filters
          :cars="cars"
          :is-disable-btn-by-queries-length="isDisableBtnByQueriesLength"
          :is-loading="isLoading"
          @max-cards-shown-changed="getCars"
          @filter-changed="onFilterChange"
          @queries-was-set="onFilterChange"
        />
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
import { filterQueries } from "../../utils";
import {
  ButtonCases,
  CarsTitles,
  CarsEnginesValues,
  CarsKppsValues,
  CarBodysValues,
  Queries,
} from "../../constants";
//import { Cars } from "../../cars";
export default {
  components: {
    MButtonWithModal,
    MCarsWithFilters,
    MCarsWithOwlCarousel,
    MCreditInstallmentWithModal,
    MForm,
  },
  data() {
    return {
      isDisableBtnByQueriesLength: 0,
      isLoading: false,
    };
  },
  async destroyed() {
    // todo - исправить баг
    /* this.isLoading = true;
    this.$store.dispatch("clearCars");
    await this.getCars(16);
    this.isLoading = false; */
  },
  static: {
    //Cars,
    ButtonCases,
  },
  async created() {
    if (this.$route.path.includes("catalog")) {
      await this.onFilterChange(this.$route.query);
    }
  },
  computed: {
    carsMeta() {
      const carsMeta = this.$store.getters.CARS_META;
      if (carsMeta === null) {
        return 0;
      }
      return Object.values(carsMeta).reduce((acc, value) => acc + value, 0);
    },
    cars() {
      return this.$store.getters.CARS;
    },
    promoCars() {
      return this.cars.filter(({ promo }) => promo);
    },
    latestCars() {
      return this.cars.filter(({ latest }) => latest);
    },
  },
  methods: {
    async getCars(value) {
      await this.$store.dispatch("getCars", {
        take: value,
        skip: this.cars.length,
      });
    },
    async onFilterChange(queries) {
      if (queries === null) {
        this.isLoading = true;
        this.$store.dispatch("clearCars");
        await this.getCars(16);
        this.isLoading = false;
        return;
      }
      const queriesMap = {
        title:
          queries?.carTitle != null
            ? CarsTitles.indexOf(queries.carTitle)
            : null,
        model: queries?.carModel ?? "",
        car_engine:
          queries?.carEngine != null
            ? CarsEnginesValues.indexOf(queries.carEngine)
            : null,
        kpp:
          queries?.carKpp != null
            ? CarsKppsValues.indexOf(queries.carKpp)
            : null,
        body:
          queries?.carBody != null
            ? CarBodysValues.indexOf(queries.carBody)
            : null,
        year_from: queries?.carYearFrom ?? null,
      };
      const queriesToFetch = filterQueries(queriesMap);
      console.log(queriesToFetch);
      if (Object.keys(queriesToFetch).length === 0) {
        return;
      }
      console.log(this.isDisableBtnByQueriesLength);
      this.isDisableBtnByQueriesLength += 1;
      console.log(this.isDisableBtnByQueriesLength);
      this.$store.dispatch("clearCars");
      this.isLoading = true;
      await this.$store.dispatch("getCarsByFilter", queriesToFetch);
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
