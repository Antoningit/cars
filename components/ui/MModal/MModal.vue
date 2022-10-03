<template>
  <transition name="fade" appear>
    <div class="modal-bg" @click.self="$emit('on-modal-close-click')">
      <div :class="modalClass">
        <div class="modal-close" @click="$emit('on-modal-close-click')">
          <span></span>
          <span></span>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import { ButtonCases } from "../../../constants";
export default {
  props: {
    modalType: {
      type: String,
      default: ButtonCases.CALLBACK,
    },
  },
  computed: {
    modalClass() {
      const { modalType } = this;
      if (
        modalType === ButtonCases.CALLBACK ||
        modalType === ButtonCases.CREDIT_ORDER
      ) {
        return "modal-callback";
      }
      if (modalType === ButtonCases.ORDER) {
        return "modal-callback";
      }
      if (modalType === ButtonCases.CREDIT) {
        return "modal-credit";
      }
      if (modalType === ButtonCases.TRADE_IN) {
        return "modal-credit";
      }
      if (modalType === ButtonCases.TRAID_IN_EXCHANGE) {
        return "modal-credit";
      }
      if (modalType.includes("мес. Оформить заявку")) {
        return "modal-credit";
      }
      if (modalType === ButtonCases.INSTALLMENT) {
        return "modal-callback";
      }
      if (modalType === ButtonCases.PODBOR) {
        return "modal-callback";
      }
      if (modalType === ButtonCases.VYKUP) {
        return "modal-callback";
      }
      return "modal-callback";
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>