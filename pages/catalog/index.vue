<template>
  <div class="catalog">
    <div class="row">
      <div class="catalog__title">
        <h1>
          Купить автомобиль с пробегом в Москве в кредит ({{
            $options.static.Cars.length
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
        <m-cars-with-filters :cars="$options.static.Cars" />
      </div>
    </div>
  </div>
</template>

<script>
import MCarsWithFilters from "../../components/common/MCarsWithFilters/MCarsWithFilters.vue";
import { Cars } from "../../cars";
export default {
  components: {
    MCarsWithFilters,
  },
  static: {
    Cars,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>