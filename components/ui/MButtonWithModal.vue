<template>
  <div class="button-with-modal-wrapper">
    <m-button :name="name" @btn-clicked="onBtnClicked" />
    <portal to="app">
      <m-modal
        v-if="isShowModal"
        @on-modal-close-click="onModalCloseClicked"
        :modal-type="name"
      >
        <div class="modal-container">
          <div class="modal-container__cars" v-if="car != null || isNoCar">
            <m-filters-with-cars :car="car" :is-no-car="isNoCar" />

            <div class="advantages">
              <div
                class="advantages__trade-in trade-in"
                v-if="
                  name === $options.static.ButtonCases.TRADE_IN ||
                  name === $options.static.ButtonCases.TRAID_IN_EXCHANGE
                "
              >
                <div class="trade-in__title mb-1">
                  Преимущества программы TRADE-IN
                </div>
                <div class="trade-in__advantages">
                  <ul>
                    <li>Выгода до 50 000 руб. на приобретаемый автомобиль;</li>
                    <li>Экономия времени;</li>
                    <li>Юридическая чистота сделки;</li>
                    <li>Удобная форма оплаты;</li>
                    <li>Подарки при покупке автомобиля по системе Trade-in.</li>
                  </ul>
                </div>
              </div>
              <div
                class="advantages__credit credit"
                v-if="
                  name === $options.static.ButtonCases.CREDIT ||
                  name === $options.static.ButtonCases.CREDIT_ORDER ||
                  isIncludesOrderRequest
                "
              >
                <div class="credit__title mb-1">
                  Почему выгодно взять кредит
                </div>
                <div class="credit__advantages">
                  <ul>
                    <li>Одобрение онлайн</li>
                    <li>Очень низкие ставки</li>
                    <li>Самый высокий процент одобрения</li>
                    <li>Лучшие цены на авто</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <m-form
            :class="{ 'modal-container__form': car != null || isNoCar }"
            :name="name"
          />
        </div>
      </m-modal>
    </portal>
  </div>
</template>

<script>
import { Portal } from "portal-vue";
import MButton from "./MButton.vue";
import MModal from "./MModal/MModal.vue";
import MForm from "./MForm/MForm.vue";
import MFiltersWithCars from "./MFiltersWithCars/MFiltersWithCars.vue";
import { ButtonCases } from "../../constants";
export default {
  components: {
    MButton,
    MModal,
    MForm,
    MFiltersWithCars,
    Portal,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    car: {
      type: Object,
      default: () => {},
    },
    isNoCar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  static: {
    ButtonCases,
  },
  computed: {
    isIncludesOrderRequest() {
      return this.name.includes("мес. Оформить заявку");
    },
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

<style scoped lang="scss">
.button-with-modal-wrapper {
  display: inline-block;
}
.modal-container {
  display: flex;
  flex-wrap: wrap;
  &__cars {
    display: flex;
    flex-basis: 65%;
  }
  &__form {
    flex-basis: 35%;
  }
}
.advantages {
  flex-basis: 50%;
  padding: 30px;
}
.trade-in,
.credit {
  &__title {
    text-align: center;
    font-weight: bold;
  }
}
.trade-in,
.credit {
  &__advantages {
    text-align: left;
    ul li {
      margin-bottom: 1.5rem;
      padding-left: 40px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        background: url(../../static/images/check.png);
        width: 30px;
        height: 30px;
        background-size: cover;
        position: absolute;
        left: 0;
        top: -5px;
      }
    }
  }
}
@media (max-width: 1025px) {
}

@media (max-width: 769px) {
  .modal-container {
    &__cars {
      flex-basis: 100%;
    }
    &__form {
      flex-basis: 50%;
      margin: 0 auto;
    }
  }
}

@media (max-width: 426px) {
  .modal-container {
    &__cars {
      display: block;
    }
    &__form {
      flex-basis: 100%;
    }
  }
}

@media (max-width: 376px) {
}

@media (max-width: 321px) {
}
</style>