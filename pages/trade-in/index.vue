<template>
  <div class="trade-in">
    <div class="row">
      <div class="trade-in-row">
        <div class="trade-in-row__text row-text">
          <div class="row-text__title">
            <h1>Хочу обменять свой автомобиль по программе Трейд-ИН</h1>
          </div>
          <div class="row-text__p">
            <p>
              Оформите заявку на интересующий вас автомобиль по программе
              Трейд-ИН
            </p>
          </div>
          <div class="row-text__btn">
            <m-button-with-modal
              :name="$options.static.ButtonCases.TRAID_IN_EXCHANGE"
              :is-no-car="true"
            />
          </div>
        </div>
        <div class="trade-in-row__img">
          <img src="../../static/images/trade-in.jpg" alt="" />
        </div>
      </div>
      <div class="trade-in-advantages">
        <div class="trade-in-advantages__item">
          <p>Условия программы</p>
          <ul>
            <li>Бесплатная оценка автомобиля;</li>
            <li>Быстрое оформление сделки за 45 минут;</li>
            <li>Оценка стоимости автомобиля по рыночной цене;</li>
            <li>
              Ваш автомобиль может выступать в качестве первоначального взноса
              по кредиту;
            </li>
            <li>Экспресс-оценка автомобиля по телефону.</li>
          </ul>
        </div>
        <div class="trade-in-advantages__item">
          <p>Преимущества программы Trade-in</p>
          <ul>
            <li>Выгода до 50 000 руб. на приобретаемый автомобиль;</li>
            <li>Экономия времени;</li>
            <li>Юридическая чистота сделки;</li>
            <li>Удобная форма оплаты;</li>
            <li>Подарки при покупке автомобиля по системе Trade-in.</li>
          </ul>
        </div>
        <div class="trade-in-advantages__item">
          <p>Требования к клиентам</p>
          <ul>
            <li>ПТС;</li>
            <li>Паспорт РФ;</li>
            <li>Генеральная доверенность (если Вы не собственник);</li>
            <li>Все комплекты ключей;</li>
            <li>Диагностическая карта (желательно);</li>
            <li>Документы о сервисном обслуживании (желательно).</li>
          </ul>
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