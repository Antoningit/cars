<template>
  <div v-if="!withImgs" class="row cars-titles-without-imgs">
    <div
      class="cars-titles-without-imgs__item item"
      v-for="{ title, count } in carsTitlesImgCount"
      :key="title"
      @click="goToCatalog(title)"
    >
      <span class="item__title">{{ title }}</span>
      <span v-if="count > 0" class="item__count">{{ count }}</span>
    </div>
  </div>
  <div v-else class="row cars-titles-with-imgs">
    <div
      class="cars-titles-with-imgs__item imgs-item"
      :class="{ active: carTitle === title }"
      v-for="{ title, img, count } in carsTitlesImgCount"
      :key="title"
      @click="goToCatalog(title)"
    >
      <div class="imgs-item__img">
        <img :src="img" alt="" />
      </div>
      <div class="imgs-item__text imgs-text">
        <div class="imgs-text__title">{{ title }}</div>
        <div class="imgs-text__subtitle" v-if="count > 0">{{ count }} авто</div>
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
  },
  mounted() {},
  computed: {
    carsTitlesImgCount() {
      const carsMeta = this.$store.getters.CARS_META;
      if (carsMeta === null) {
        return [];
      }
      return Object.values(CarsTitlesWithImgs).map((car, i) => ({
        ...car,
        count: carsMeta[i] ?? 0,
      }));
    },
  },
  methods: {
    goToCatalog(title) {
      const foundCar = this.carsTitlesImgCount.find(
        ({ title: carTitle }) => carTitle === title
      );
      const foundCarCount = foundCar?.count ?? 0;
      if (foundCarCount === 0) {
        return;
      }
      this.$router.push(`/catalog?carTitle=${title}`);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
