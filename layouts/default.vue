<template>
  <div>
    <m-header :cars="cars" id="header" />
    <main><Nuxt :style="paddingTop" /></main>
    <m-footer :cars="cars" />
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
    this.paddingTop = this.resolvePaddingTop();
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
  },
  methods: {
    resolvePaddingTop() {
      // this.$refs не видит в этом компоненте - выдает пустой объект
      const header = document.querySelector("#header");
      return { paddingTop: `${header.offsetHeight}px` };
    },
  },
};
</script>

<style></style>
