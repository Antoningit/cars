<template>
  <div v-if="isLoading" class="loader-wrapper">
    <div class="lds-dual-ring"></div>
  </div>
  <div v-else>
    <m-header id="header" />
    <main class="main"><Nuxt /></main>
    <m-footer />
    <portal-target name="app"></portal-target>
  </div>
</template>

<script>
import MHeader from "../components/ui/MHeader/MHeader.vue";
import MFooter from "../components/ui/MFooter/MFooter.vue";
import { PortalTarget } from "portal-vue";

export default {
  components: {
    MHeader,
    MFooter,
    PortalTarget,
  },
  data() {
    return {
      paddingTop: null,
    };
  },
  mounted() {
    //this.paddingTop = this.resolvePaddingTop();
  },
  async created() {
    await this.$store.dispatch("getCarsMeta");
    if (
      this.cars.length === 0 &&
      this.queriesLength === 0 /*Object.keys(this.$route.query).length*/
    ) {
      this.$store.dispatch("toggleLoading", true);
      this.$store.dispatch("clearCars");
      await this.$store.dispatch("getCars", { take: 16, skip: 0 });
      this.$store.dispatch("toggleLoading", false);
      /* await this.$store.dispatch("getCarsByFilter", {
        title: 33,
        car_engine: 1,
        kpp: 0,
        year_from: 2012,
      }); */
    }
  },
  computed: {
    queriesLength() {
      return Object.keys(
        Object.fromEntries(
          Object.entries(this.$route.query).filter(([_, v]) => v !== "")
        )
      ).length;
    },
    isLoading() {
      return this.$store.getters.IS_LOADING;
    },
    cars() {
      return this.$store.getters.CARS;
    },
  },
  methods: {
    resolvePaddingTop() {
      // this.$refs не видит в этом компоненте - выдает пустой объект
      // const header = document.querySelector("#header");
      // return { paddingTop: `${header.offsetHeight}px` };
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 165px;
}
@media (max-width: 1025px) {
  .main {
    padding-top: 159px;
  }
}
@media (max-width: 769px) {
  .main {
    padding-top: 149px;
  }
}
@media (max-width: 500px) {
  .main {
    padding-top: 156px;
  }
}
@media (max-width: 376px) {
  .main {
    padding-top: 151px;
  }
}
@media (max-width: 321px) {
  .main {
    padding-top: 146px;
  }
}
</style>
