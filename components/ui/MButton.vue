<template>
  <div class="btn-wrapper" @click="$emit('btn-clicked')">
    <button
      class="btn"
      :class="[btn.class, { 'btn-with-phone': btnWithPhone }]"
    >
      <img
        v-if="btnWithPhone"
        class="img-phone"
        src="../../static/images/phone-call.png"
        alt=""
      /><span>{{ btn.name }}</span>
    </button>
  </div>
</template>

<script>
import { ButtonCases } from "../../constants";
export default {
  static: {},
  data() {
    return {};
  },
  computed: {
    btn() {
      const { name } = this;
      if (name === ButtonCases.CALLBACK) {
        return {
          class: "callback-btn",
          name: ButtonCases.CALLBACK,
        };
      }
      if (name === ButtonCases.ORDER) {
        return {
          class: "order-btn",
          name: ButtonCases.ORDER,
        };
      }
      if (name === ButtonCases.CREDIT) {
        return {
          class: "credit-btn",
          name: ButtonCases.CREDIT,
        };
      }
      if (name === ButtonCases.TRADE_IN) {
        return {
          class: "credit-btn",
          name: ButtonCases.TRADE_IN,
        };
      }
      if (name.includes("мес. Оформить заявку")) {
        return {
          class: "credit-btn",
          name,
        };
      }
      if (name === ButtonCases.CREDIT_ORDER) {
        return {
          class: "order-btn",
          name: ButtonCases.CREDIT_ORDER,
        };
      }
      if (name === ButtonCases.TRAID_IN_EXCHANGE) {
        return {
          class: "callback-btn",
          name: ButtonCases.TRAID_IN_EXCHANGE,
        };
      }
      if (name === ButtonCases.PODBOR) {
        return {
          class: "order-btn",
          name: ButtonCases.PODBOR,
        };
      }
      if (name === ButtonCases.VYKUP) {
        return {
          class: "order-btn",
          name: ButtonCases.VYKUP,
        };
      }
      return {
        class: "",
        name: "",
      };
    },
    btnWithPhone() {
      return this.btn.name === ButtonCases.CALLBACK;
    },
  },
  props: {
    name: {
      type: String,
      default: "Заказать звонок",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-wrapper {
  display: inline-block;
}
.btn-with-phone {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-phone {
  margin-right: 0.5rem;
}
@media (max-width: 1025px) {
}

@media (max-width: 769px) {
}

@media (max-width: 426px) {
}

@media (max-width: 376px) {
}

@media (max-width: 321px) {
}
</style>
