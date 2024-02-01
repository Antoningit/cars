<template>
  <!-- car-single -->
  <m-car-content
    :car="car"
    :is-promo="isPromo"
    @click.native="goToCar($event, car.id)"
  >
    <m-button-with-modal
      class="item-buttons__credit-btn"
      :name="$options.static.ButtonCases.CREDIT"
      :car="car"
    />
    <m-button-with-modal
      class="item-buttons__trade-in-btn"
      :name="$options.static.ButtonCases.TRADE_IN"
      :car="car"
    />
  </m-car-content>
</template>

<script>
import { ButtonCases } from "../../../constants";
import MButtonWithModal from "../../ui/MButtonWithModal/MButtonWithModal.vue";
import MCarContent from "../MCarContent/MCarContent.vue";
export default {
  components: {
    MButtonWithModal,
    MCarContent,
  },
  props: {
    car: {
      type: Object,
      default: () => {},
    },
    isShowBtn: {
      type: Boolean,
      default: false,
    },
    isPromo: {
      type: Boolean,
      default: false,
    },
    cars: {
      type: Array,
      default: () => [],
    },
  },
  static: {
    ButtonCases,
  },
  methods: {
    goToCar(event, id) {
      if (event.target.tagName === "BUTTON") {
        return;
      }
      this.$router.push(`/catalog/${id}`);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
