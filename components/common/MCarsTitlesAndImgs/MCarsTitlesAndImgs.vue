<template>
  <div v-if="!withImgs" class="row cars-titles-without-imgs">
    <div
      class="cars-titles-without-imgs__item item"
      v-for="{ title } in carsTitlesWithImgsValues"
      :key="title"
      @click="goToCatalog(title)"
    >
      <span class="item__title">{{ title }}</span>
      <span class="item__count">{{ carsCount[title.replace(/ /g, "_")] }}</span>
    </div>
  </div>
  <div v-else class="row cars-titles-with-imgs">
    <div
      class="cars-titles-with-imgs__item imgs-item"
      :class="{ active: carTitle === title }"
      v-for="{ title, img } in carsTitlesWithImgsValues"
      :key="title"
      @click="goToCatalog(title)"
    >
      <div class="imgs-item__img">
        <img :src="img" alt="" />
      </div>
      <div class="imgs-item__text imgs-text">
        <div class="imgs-text__title">{{ title }}</div>
        <div class="imgs-text__subtitle" v-if="carsCountNotNull(title)">
          {{ carsCount[title.replace(/ /g, "_")] }} авто
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CarsTitlesWithImgs } from "../../../constants";
//import { Cars } from "../../../cars";
export default {
  props: {
    withImgs: {
      type: Boolean,
      default: false,
    },
    carTitle: {
      type: String,
      default: "",
    },
    cars: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
  computed: {
    carsTitlesWithImgsValues() {
      return Object.values(CarsTitlesWithImgs);
    },
    carsCount() {
      return this.cars.reduce((acc, { title }, i) => {
        if (Object.values(CarsTitlesWithImgs)[i].title === title) {
        }
        return {
          ...acc,
          [title.replace(/ /g, "_")]: (acc[title] ?? 0) + 1,
        };
      }, {});
    },
  },
  static: {
    CarsTitlesWithImgs,
  },
  methods: {
    carsCountNotNull(title) {
      return this.carsCount[title.replace(/ /g, "_")] != null;
    },
    goToCatalog(title) {
      if (this.carsCount[title.replace(/ /g, "_")] == null) {
        return;
      }
      this.$router.push(`/catalog/?carTitle=${title}`);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
