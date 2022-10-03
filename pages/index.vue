<template>
  <div>
    <first />
    <second />
    <third />
    <fourth />
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
  mounted() {
    if (this.users.length === 0) {
      this.$store.dispatch("getUsers");
    }
  },
  computed: {
    users() {
      return this.$store.getters.USERS;
    },
  },
};
</script>
