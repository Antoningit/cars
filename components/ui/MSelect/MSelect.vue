<template>
  <div class="custom-select" :tabindex="tabindex" @blur="isOpen = false">
    <div class="selected" :class="{ isOpen: isOpen }" @click="isOpen = !isOpen">
      {{ selected !== "" ? selected : placeholder }}
    </div>
    <div class="items" :class="{ selectHide: !isOpen }">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="onSelectClicked(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Выберите из списка",
    },
    value: {},
  },
  data() {
    return {
      //selected: this.options.length > 0 ? this.options[0] : null,
      selected: "",
      isOpen: false,
    };
  },
  watch: {
    value: {
      handler(value) {
        if (value === "" || value == null) {
          this.selected = "";
          // watch за query
          return;
        }
        // watch за query
        this.selected = value;
      },
    },
  },
  mounted() {
    //this.$emit("input", this.selected);
    if (this.value !== "" || this.value != null) {
      this.selected = this.value;
    }
  },
  methods: {
    onSelectClicked(option) {
      // т.к. стоит watch, то можно второй раз не ставить (сейчас this.selected = value закоментировано)
      //this.selected = option;
      this.isOpen = false;
      this.$emit("input", option);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>