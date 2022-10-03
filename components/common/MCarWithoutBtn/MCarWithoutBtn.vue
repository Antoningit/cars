<template>
  <!-- car-single -->
  <m-car-content :car="car" :item-flex-class="itemFlexClass" />
</template>

<script>
import MCarContent from "../MCarContent/MCarContent.vue";
export default {
  components: { MCarContent },
  props: {
    car: {
      type: Object,
      default: () => {},
    },
    itemFlexClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>