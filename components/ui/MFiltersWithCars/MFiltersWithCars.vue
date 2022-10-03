<template>
  <div class="filters-with-cars-flex">
    <div class="change-car" v-if="!isChoosingNewCarActive">
      <button class="btn clear-btn mb-1" @click="toggleIsChoosingNewCarActive">
        Изменить автомобиль
      </button>
    </div>
    <m-car-without-btn :car="widgetCar" v-if="!isChoosingNewCarActive" />

    <!-- filters -->
    <div class="mb-1" v-if="isChoosingNewCarActive">Выберите автомобиль</div>
    <div class="mb-1 filters-in-modal" v-if="isChoosingNewCarActive">
      <m-select
        :options="carTitleOptions"
        v-model="carTitle"
        @input="clearFilters"
      />
      <m-select
        :options="carModelsOptions"
        v-model="carModel"
        @input="setActiveSlideToDefault"
      />
    </div>
    <!-- cars-list -->
    <!-- <transition-group
      name="fade"
      tag="div"
      class="cars-list"
      v-if="isChoosingNewCarActive"
    >
      <div
        v-for="car in filteredCarsList"
        :key="car.id"
        class="cars-item"
        @click="changeCar(car)"
      >
        <div class="cars-item__img">
          <img :src="car.img" alt="" />
        </div>
        <div class="cars-item__text">
          <div class="cars-item__title">
            {{ car.title }}
          </div>
          <div class="cars-item__mod">
            {{ car.mod }}
          </div>
          <div class="cars-item__kpp">
            <span>{{ car.kpp }}</span>
            <span>{{ car.engine }}</span>
          </div>
          <div class="cars-item__year-from">
            {{ car.year_from }}
          </div>
          <div class="cars-item__mileage">
            {{ car.mileage }}
          </div>
          <div class="cars-item__old-price">
            {{ car.old_price }}
          </div>
          <div class="cars-item__price">
            {{ car.price }}
          </div>
          <div class="cars-item__buttons"></div>
        </div>
      </div>
    </transition-group> -->
    <div class="filters-with-cars-flex__carousel-desktop">
      <m-carousel
        v-if="isChoosingNewCarActive"
        :slides="filteredCarsList"
        :active-slide="activeSlide"
        :item-flex-class="'one-column'"
        @on-car-clicked="changeCar"
        @active-changed="changeActive"
      />
    </div>
    <div class="filters-with-cars-flex__carousel-mobile">
      <m-carousel-mobile
        v-if="isChoosingNewCarActive"
        :slides="filteredCarsList"
        :item-flex-class="'one-column'"
        @on-car-clicked="changeCar"
        @active-changed="changeActive"
      />
    </div>
  </div>
</template>

<script>
import MSelect from "../../ui/MSelect/MSelect.vue";
import MCarousel from "../../ui/MCarousel/MCarousel.vue";
import MCarouselMobile from "../../ui/MCarousel/MCarouselMobile.vue";
import MCarWithoutBtn from "../../common/MCarWithoutBtn/MCarWithoutBtn.vue";
import { Filters } from "../../../constants";
import { Cars } from "../../../cars";
export default {
  components: {
    MSelect,
    MCarousel,
    MCarouselMobile,
    MCarWithoutBtn,
  },
  props: {
    car: {
      type: Object,
      default: () => {},
    },
    isNoCar: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    if (this.isNoCar) {
      this.isChoosingNewCarActive = true;
      return;
    }
    if (this.car == null) {
      return;
    }
    this.widgetCar = this.car;
    this.setWidgetData();
  },
  data() {
    return {
      widgetCar: null,
      carTitle: "",
      carModel: "",
      isChoosingNewCarActive: false,
      activeSlide: 0,
    };
  },
  static: {
    Cars,
  },
  computed: {
    carTitleOptions() {
      return Filters.carTitles;
    },
    carModelsOptions() {
      const carModelsByCarTitle = this.$options.static.Cars.filter(
        ({ title }) => title === this.carTitle
      ).map(({ model }) => model);
      return Filters.carModels.filter((model) =>
        carModelsByCarTitle.includes(model)
      );
    },
    filteredCarsList() {
      return this.$options.static.Cars.filter(
        ({ title }) => title === this.carTitle || this.carTitle === ""
      ).filter(
        ({ model }) =>
          model === this.carModel ||
          this.carModel === "" ||
          this.carModel == null
      );
    },
  },
  methods: {
    changeActive(value) {
      this.activeSlide = value;
    },
    setActiveSlideToDefault() {
      this.activeSlide = 1;
    },
    clearFilters() {
      this.setActiveSlideToDefault();
      this.carModel = "";
    },
    toggleIsChoosingNewCarActive() {
      this.isChoosingNewCarActive = !this.isChoosingNewCarActive;
    },
    changeCar(car) {
      this.widgetCar = car;
      this.toggleIsChoosingNewCarActive();
      this.setWidgetData();
    },
    setWidgetData() {
      const { title, model } = this.widgetCar;
      this.carTitle = title;
      this.carModel = model;
    },
  },
};
</script>


<style lang="scss" src="./style.scss" scoped>
</style>