<template>
  <div>
    <img
      class="car-purchase"
      src="../../../static/images/promo-banner1.jpg"
      alt=""
      @click="onBtnClicked"
    />
    <m-modal
      v-if="isShowModal"
      :modal-type="$options.static.ButtonCases.INSTALLMENT"
      @on-modal-close-click="onModalCloseClicked"
    >
      <m-form
        :name="$options.static.ButtonCases.INSTALLMENT"
        @close-popup="onModalCloseClicked"
      />
    </m-modal>
  </div>
</template>

<script>
import MModal from "../MModal/MModal.vue";
import MForm from "../MForm/MForm.vue";
import { ButtonCases } from "../../../constants";
export default {
  components: {
    MModal,
    MForm,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  static: {
    ButtonCases,
  },
  methods: {
    onBtnClicked() {
      this.isShowModal = true;
    },
    onModalCloseClicked() {
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
