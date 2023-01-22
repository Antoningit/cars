<template>
  <div v-if="isLoading" class="loader-wrapper">
    <div class="lds-dual-ring"></div>
  </div>
  <div v-else>
    <m-header :cars="cars" id="header" />
    <main class="main"><Nuxt /></main>
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
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #222;
  border-color: #222 transparent #222 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
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
