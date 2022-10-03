<template>
  <div>
    <m-header id="header" />
    <main><Nuxt :style="paddingTop" /></main>
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
    this.paddingTop = this.resolvePaddingTop();
  },
  created() {},
  methods: {
    resolvePaddingTop() {
      // this.$refs не видит в этом компоненте - выдает пустой объект
      const header = document.querySelector("#header");
      return { paddingTop: `${header.offsetHeight}px` };
    },
  },
};
</script>

<style>
</style>