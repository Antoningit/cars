<template>
  <div>
    <div class="filters-flex">
      <m-select
        :options="$options.static.CarsTitles"
        v-model="queries.carTitle"
        @input="setQueryCarTitleAndClearFilters"
      />
      <m-select
        :options="carModelsOptions"
        v-model="queries.carModel"
        @input="setQueryCarModel"
      />
      <m-select
        :options="carEngineOptions"
        v-model="queries.carEngine"
        @input="setQueryCarEngine"
      />
      <m-select
        :options="carKppOptions"
        v-model="queries.carKpp"
        @input="setQueryCarKpp"
      />
      <m-select
        :options="carBodyOptions"
        v-model="queries.carBody"
        @input="setQueryCarBody"
      />
      <m-select
        :options="carYearFromOptions"
        v-model="queries.carYearFrom"
        @input="setQueryCarYearFrom"
      />
      <div>
        <input
          type="text"
          placeholder="Цена до"
          v-model="queries.carPrice"
          @blur="(e) => setQueryCarPrice(e.target.value)"
        />
      </div>
    </div>
    <!-- <select v-model="carTitle">
          <option v-for="option in carTitleOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <select v-model="carModel">
          <option v-for="option in carModelsOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <select v-model="carEngine">
          <option v-for="option in carEngineOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <select v-model="carKpp">
          <option v-for="option in carKppOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <select v-model="carBody">
          <option v-for="option in carBodyOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <select v-model="carYearFrom">
          <option v-for="option in carYearFromOptions" :key="option">
            {{ option }}
          </option>
        </select> -->

    <div class="sort-flex">
      <div
        class="sort-flex__min"
        :class="{ 'sort-flex__min--active': queries.sort === 'asc' }"
        @click="setQuerySort('asc')"
      >
        Сначала по дешевле
      </div>
      <div
        class="sort-flex__max"
        :class="{ 'sort-flex__max--active': queries.sort === 'desc' }"
        @click="setQuerySort('desc')"
      >
        Сначала по дороже
      </div>
    </div>
    <button
      class="btn clear-btn mt-1"
      @click="clearFiltersAndQueries"
      v-if="queriesLength > 0"
    >
      Очистить фильтры
    </button>
    <div v-if="isLoading" class="loader-wrapper">
      <div class="lds-dual-ring"></div>
    </div>
    <m-cars
      v-else
      :cars="filteredCarsList"
      :max-cards-shown-count-prop="maxCardsShownCount"
      @max-cards-shown-changed="changeMaxCardsShown"
    ></m-cars>
  </div>
</template>

<script>
import MSelect from "../../ui/MSelect/MSelect.vue";
import MCars from "../../common/MCars/MCars.vue";
import {
  Filters,
  Queries,
  CarsTitles,
  fullCarsModels,
} from "../../../constants";
export default {
  components: {
    MSelect,
    MCars,
  },
  props: {
    cars: {
      type: Array,
      default: () => [],
    },
    isDisableBtnByQueriesLength: {
      type: Number,
      default: 0,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      queries: Queries,
      maxCardsShownCount: 16,
    };
  },
  static: {
    CarsTitles,
  },
  created() {
    this.setQueries();
    // this.$emit("queries-was-set", this.queries);
  },
  watch: {
    "$route.query": {
      deep: true,
      handler() {
        if (this.queriesLength > 0) {
          this.setQueries();
        }
      },
    },
    isDisableBtnByQueriesLength: {
      immediate: true,
      handler() {
        this.maxCardsShownCount = 500;
      },
    },
  },
  computed: {
    queriesLength() {
      return Object.keys(
        Object.fromEntries(
          Object.entries(this.queries).filter(([_, v]) => v !== "")
        )
      ).length;
    },
    carModelsOptions() {
      if (this.queries.carTitle.length > 0 && this.cars.length > 0) {
        const carTitle =
          this.cars.find(({ title }) => title === this.queries.carTitle)
            ?.title ?? null;
        return carTitle !== null ? [...new Set(fullCarsModels[carTitle])] : [];
      }
      const carModelsByCarTitle = this.cars
        .filter(({ title }) => title === this.queries.carTitle)
        .map(({ model }) => model);
      return Filters(this.cars).carModels.filter((model) =>
        carModelsByCarTitle.includes(model)
      );
    },
    carEngineOptions() {
      return Filters(this.cars).carEngines;
    },
    carKppOptions() {
      return Filters(this.cars).carKpps;
    },
    carBodyOptions() {
      return Filters(this.cars).carBodys;
    },
    carYearFromOptions() {
      return Filters(this.cars).carYearFroms;
    },
    filteredCarsList() {
      return this.cars
        .filter(
          ({ title }) =>
            title === this.queries.carTitle || this.queries.carTitle === ""
        )
        .filter(
          ({ model }) =>
            model.toLowerCase() === this.queries.carModel.toLowerCase() ||
            this.queries.carModel === "" ||
            this.queries.carModel == null
        )
        .filter(
          ({ engine }) =>
            engine === this.queries.carEngine || this.queries.carEngine === ""
        )
        .filter(
          ({ kpp }) => kpp === this.queries.carKpp || this.queries.carKpp === ""
        )
        .filter(
          ({ body }) =>
            body === this.queries.carBody || this.queries.carBody === ""
        )
        .filter(
          ({ year_from: yearFrom }) =>
            String(yearFrom) === String(this.queries.carYearFrom) ||
            this.queries.carYearFrom === ""
        )
        .filter(
          ({ price }) =>
            Number(price) < Number(this.queries.carPrice) ||
            this.queries.carPrice === ""
        )
        .sort((a, b) => {
          if (this.queries.sort === "asc") {
            return Number(a.price) - Number(b.price);
          }
          if (this.queries.sort === "desc") {
            return Number(b.price) - Number(a.price);
          }
        });
    },
  },
  methods: {
    changeMaxCardsShown(value) {
      this.maxCardsShownCount = value;
      this.$emit("max-cards-shown-changed", value);
    },
    clearFiltersAndQueries() {
      this.clearAllFilters();
      this.maxCardsShownCount = 16;
      this.$router.push({ query: {} });
      this.$emit("filter-changed", null);
    },
    clearAllFilters() {
      this.queries.carTitle = "";
      this.clearFilters();
    },
    clearFilters() {
      this.queries.carModel = "";
    },
    setQueryCarTitleAndClearFilters(option) {
      const queries = this.resolveQueries();
      queries.carTitle = option;
      queries.carModel = "";
      this.$router.push({ query: queries });
      this.$emit("filter-changed", queries);
      // watch за query
      // this.clearFilters();
    },
    setQueryCarModel(option) {
      const queries = this.resolveQueries();
      queries.carModel = option;
      this.$router.push({ query: queries });
      this.$emit("filter-changed", queries);
    },
    setQueryCarEngine(option) {
      const queries = this.resolveQueries();
      queries.carEngine = option;
      this.$router.push({ query: queries });
      this.$emit("filter-changed", queries);
    },
    setQueryCarKpp(option) {
      const queries = this.resolveQueries();
      queries.carKpp = option;
      this.$router.push({ query: queries });
      this.$emit("filter-changed", queries);
    },
    setQueryCarBody(option) {
      const queries = this.resolveQueries();
      queries.carBody = option;
      this.$router.push({ query: queries });
      this.$emit("filter-changed", queries);
    },
    setQueryCarYearFrom(option) {
      const queries = this.resolveQueries();
      queries.carYearFrom = option;
      this.$router.push({ query: queries });
      this.$emit("filter-changed", queries);
    },
    setQueryCarPrice(value) {
      const queries = this.resolveQueries();
      queries.carPrice = value;
      this.$router.push({ query: queries });
    },
    setQuerySort(value) {
      const queries = this.resolveQueries();
      queries.sort = value;
      this.$router.push({ query: queries });
    },
    resolveQueries() {
      const queries = { ...Queries };
      for (const query in queries) {
        if (this.$route.query[query] != null) {
          queries[query] = this.$route.query[query];
        }
      }
      return Object.fromEntries(
        Object.entries(queries).filter(([_, v]) => v !== "")
      );
    },
    setQueries() {
      for (const query in this.queries) {
        if (this.$route.query[query] != null) {
          this.queries[query] = this.$route.query[query];
        }
        if (this.$route.query[query] == null) {
          this.queries[query] = "";
        }
      }
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
