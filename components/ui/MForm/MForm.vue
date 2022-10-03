<template>
  <div class="request">
    <div class="form" v-if="status.length === 0">
      <div class="form-title mb-1">{{ formText.title }}</div>
      <div class="form-description mb-2">{{ formText.description }}</div>
      <form>
        <input
          type="text"
          name="title"
          v-model="title"
          class="mb-1"
          placeholder="Ваше Имя"
        />
        <input
          type="text"
          name="phone"
          v-model="phone"
          class="mb-1"
          placeholder="Ваш Телефон"
          :class="{
            invalid:
              ($v.phone.$dirty && !$v.phone.required) ||
              ($v.phone.$dirty && !$v.phone.minLength) ||
              ($v.phone.$dirty && !$v.phone.mustBeNumber),
          }"
        />
        <transition-group name="fade">
          <small
            v-for="{ condition, text } in validationsTexts"
            :key="text"
            class="mb-1 d-block"
            v-show="condition"
            >{{ text }}</small
          >
        </transition-group>
        <button
          class="btn form-btn mb-2"
          type="submit"
          @click.prevent="onBtnSubmitHandler"
        >
          Отправить
        </button>
      </form>
    </div>
    <div class="request__after after" v-else-if="status === 'OK'">
      <p class="after__p">
        Спасибо за заявку! Мы свяжемся с вами в ближайшее время
      </p>
    </div>
    <div class="request__after after" v-else>
      <p class="after__p">
        Произошла ошибка при отправке. Закройте форму и попробуйте ещё раз
      </p>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { ButtonCases, SITE_DOMEN } from "../../../constants";
import { toFormData } from "../../../utils";
const mustBeNumber = (value) => {
  const isPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{1,10}$/;
  return value.match(isPhone) ? true : false;
};
export default {
  props: {
    name: {
      type: String,
      default: "Обратный звонок",
    },
  },
  data() {
    return {
      title: "",
      phone: "",
      isSuccess: false,
      status: "",
    };
  },
  validations: {
    phone: { required, minLength: minLength(6), mustBeNumber },
  },
  computed: {
    validationsTexts() {
      return [
        {
          condition: this.$v.phone.$dirty && !this.$v.phone.required,
          text: 'Поле "Ваш телефон" не должно быть пустым',
        },
        {
          condition: this.$v.phone.$dirty && !this.$v.phone.minLength,
          text: `Ваш телефон должен быть не менее ${this.$v.phone.$params.minLength.min} символов. Сейчас он состоит из ${this.phone.length} символов`,
        },
        {
          condition: this.$v.phone.$dirty && !this.$v.phone.mustBeNumber,
          text: "Ваш телефон должен состоять из цифр",
        },
      ];
    },
    formText() {
      const { name } = this;
      if (name === ButtonCases.CALLBACK) {
        return {
          title: "Обратный звонок",
          description: "Введите данные, мы Вам перезвоним",
        };
      }
      if (name === ButtonCases.ORDER) {
        return {
          title: "Заказать",
          description: "Заказать",
        };
      }
      if (name === ButtonCases.CREDIT) {
        return {
          title: "Автомобили с пробегом в кредит на выгодных условиях!",
          description: "Заполните информацию",
        };
      }
      if (name === ButtonCases.TRADE_IN) {
        return {
          title: "Обмен по программе TRADE-IN на выгодных условиях!",
          description: "Заполните информацию",
        };
      }
      if (name.includes("мес. Оформить заявку")) {
        return {
          title: "Автомобили с пробегом в кредит на выгодных условиях!",
          description: "Заполните информацию",
        };
      }
      if (name === ButtonCases.CREDIT_ORDER) {
        return {
          title: "Заполните онлайн-заявку",
          description:
            "Узнайте решение банка и ваши персональные условия в течение 5 минут без посещения офиса",
        };
      }
      if (name === ButtonCases.TRAID_IN_EXCHANGE) {
        return {
          title: "Хотите обменять свой автомобиль по программе Трейд-ИН?",
          description:
            "Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время",
        };
      }
      if (name === ButtonCases.INSTALLMENT) {
        return {
          title: "Оформить автомобиль в рассрочку",
          description:
            "Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время",
        };
      }
      if (name === ButtonCases.PODBOR) {
        return {
          title: "Заявка на автоподбор",
          description:
            "Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время",
        };
      }
      if (name === ButtonCases.VYKUP) {
        return {
          title: "Заявка на выкуп",
          description:
            "Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время",
        };
      }
      return {
        class: "",
        name: "",
      };
    },
  },
  methods: {
    onBtnSubmitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        title: this.title,
        phone: this.phone,
      };
      const data = toFormData(formData);
      fetch(`${SITE_DOMEN}/mail.php`, {
        method: "POST",
        body: data,
      })
        .then(() => (this.status = "OK"))
        .catch(() => (this.status = "ERROR"));
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>