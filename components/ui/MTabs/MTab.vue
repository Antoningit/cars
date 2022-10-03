<template>
  <div class="tab__content" v-show="isActive">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Tab",
    },
    img: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>