<template>
  <div class="credit">
    <div class="row">
      <div class="credit-row">
        <div class="credit-row__text row-text">
          <div class="row-text__title">
            <h1>Кредит на легковой автомобиль с пробегом</h1>
          </div>
          <div class="row-text__p">
            <p>Приобретение автомобиля у дилера или физического лица</p>
          </div>
          <div class="row-text__btn">
            <m-button-with-modal
              :name="$options.static.ButtonCases.CREDIT_ORDER"
            />
          </div>
        </div>
        <div class="credit-row__img">
          <img src="../../static/images/credit1.jpg" alt="" />
        </div>
      </div>
      <div class="credit-conditions">
        <div class="credit-conditions__item">
          <div class="credit-conditions__title">Срок</div>
          <div class="credit-conditions__description">до 7 лет</div>
        </div>
        <div class="credit-conditions__item">
          <div class="credit-conditions__title">Сумма</div>
          <div class="credit-conditions__description">до 3 млн ₽</div>
        </div>
        <div class="credit-conditions__item">
          <div class="credit-conditions__title">Первый взнос</div>
          <div class="credit-conditions__description">от 0%</div>
        </div>
        <div class="credit-conditions__item">
          <m-button-with-modal
            :name="$options.static.ButtonCases.TRAID_IN_EXCHANGE"
            :is-no-car="true"
          />
        </div>
      </div>
      <div class="credit-advantages">
        <div class="credit-advantages__item">
          <img src="../../static/images/credit-adv1.png" alt="" />
          <p>КАСКО</p>
          <span>Не обязательно </span>
        </div>
        <div class="credit-advantages__item">
          <img src="../../static/images/credit-adv2.png" alt="" />
          <p>Одобрение за 5 минут</p>
          <span>Вы будете знать, на какую сумму рассчитывать </span>
        </div>
        <div class="credit-advantages__item">
          <img src="../../static/images/credit-adv3.png" alt="" />
          <p>Решение действительно</p>
          <span>30 дней </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ButtonCases } from "../../constants";
import MButtonWithModal from "../../components/ui/MButtonWithModal.vue";
export default {
  components: {
    MButtonWithModal,
  },
  static: {
    ButtonCases,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>