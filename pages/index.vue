<template>
  <div>
    <first />
    <second :cars="cars" />
    <third />
    <fourth :cars="cars" />
  </div>
</template>

<script>
import First from "../components/blocks/First/First.vue";
import Second from "../components/blocks/Second/Second.vue";
import Third from "../components/blocks/Third/Third.vue";
import Fourth from "../components/blocks/Fourth/Fourth.vue";
export default {
  name: "IndexPage",
  components: { First, Second, Third, Fourth },
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
};
</script>
