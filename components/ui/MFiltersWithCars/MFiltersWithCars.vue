<template>
  <div class="filters-with-cars-flex">
    <div class="change-car mb-1" v-if="!isChoosingNewCarActive">
      <img src="../../../static/images/electric-car.png" alt="" />
      <button class="btn clear-btn" @click="onChangeCarBtnClicked">
        Изменить автомобиль
      </button>
    </div>
    <m-car-without-btn :car="widgetCar" v-if="!isChoosingNewCarActive" />

    <!-- filters -->
    <div class="mb-1" v-if="isChoosingNewCarActive">Выберите автомобиль</div>
    <div v-if="isLoading" class="loader-wrapper">
      <div class="lds-dual-ring"></div>
    </div>
    <div class="mb-1 filters-in-modal" v-else-if="isChoosingNewCarActive">
      <m-select
        :options="$options.static.CarsTitles"
        v-model="carTitle"
        @input="onTitleSelectClicked"
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
    <div
      v-if="cacheCars.length > 0"
      class="filters-with-cars-flex__carousel-desktop"
    >
      <m-carousel
        v-if="isChoosingNewCarActive"
        :slides="filteredCarsList"
        :active-slide="activeSlide"
        :item-flex-class="'one-column'"
        @on-car-clicked="changeCar"
        @active-changed="changeActive"
      />
    </div>
    <div
      v-if="cacheCars.length > 0"
      class="filters-with-cars-flex__carousel-mobile"
    >
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
import { Filters, CarsTitles } from "../../../constants";
//import { Cars } from "../../../cars";
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
    /* cars: {
      type: Array,
      default: () => [],
    }, */
  },
  async created() {
    if (this.isNoCar) {
      this.isChoosingNewCarActive = true;
      const cars = await this.$store.dispatch("getCarsComponentData", {
        take: 16,
        skip: 0,
      });
      this.cacheCars = cars;
      /* this.$store.dispatch("clearCars");
      await this.$store.dispatch("getCars", {
        take: 16,
        skip: 0,
      });
      return; */
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
      cacheCars: [],
      isLoading: false,
    };
  },
  static: {
    //Cars,
    CarsTitles,
  },
  computed: {
    cars() {
      return this.$store.getters.CARS;
    },
    carModelsOptions() {
      const carModelsByCarTitle = this.cacheCars
        .filter(({ title }) => title === this.carTitle)
        .map(({ model }) => model);
      return Filters(this.cacheCars).carModels.filter((model) =>
        carModelsByCarTitle.includes(model)
      );
    },
    filteredCarsList() {
      return this.cacheCars
        .filter(({ title }) => title === this.carTitle || this.carTitle === "")
        .filter(
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
    async onTitleSelectClicked() {
      const cars = await this.$store.dispatch("getCarsByFilterComponentData", {
        title: CarsTitles.indexOf(this.carTitle),
      });
      this.cacheCars = cars;
      this.setActiveSlideToDefault();
      this.carModel = "";
    },
    async onChangeCarBtnClicked() {
      this.isChoosingNewCarActive = !this.isChoosingNewCarActive;
      this.isLoading = true;
      const cars = await this.$store.dispatch("getCarsByFilterComponentData", {
        title: CarsTitles.indexOf(this.carTitle),
      });
      /* this.$store.dispatch("clearCars");
      await this.$store.dispatch("getCarsByFilter", {
        title: CarsTitles.indexOf(this.carTitle),
      }); */
      this.isLoading = false;
      this.cacheCars = cars;
      // this.$store.dispatch("clearCars");
      // await this.$store.dispatch("getCars", { take: 400, skip: 0 });
    },
    changeCar(car) {
      this.widgetCar = car;
      this.$emit("car-changed", this.widgetCar);
      this.isChoosingNewCarActive = false;
      this.setWidgetData();
      // this.$store.dispatch("setCarsFromCache", this.cacheCars);
    },
    setWidgetData() {
      const { title, model } = this.widgetCar;
      this.carTitle = title;
      this.carModel = model;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
