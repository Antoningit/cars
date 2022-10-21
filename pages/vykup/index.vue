<template>
  <div class="vykup">
    <div class="vykup-main">
      <div class="row">
        <div class="vykup-row">
          <div class="vykup-row__text row-text">
            <div class="row-text__title">
              <h1>
                Выкуп автомобилей в Москве и области c максимальной выгодой
              </h1>
            </div>
            <div class="row-text__p">
              <p>
                Профессиональный выкуп авто в Москве и Московской области
                осуществляет автосалон «Автомобили с пробегом», минимизируйте
                проблемы связанные с продажей транспортных средств.
              </p>
            </div>
            <div class="row-text__btn">
              <m-button-with-modal
                :name="$options.static.ButtonCases.VYKUP"
                :cars="cars"
              />
            </div>
          </div>
          <div class="vykup-row__img"></div>
        </div>
      </div>
    </div>
    <div class="vykup-advantages">
      <div class="row">
        <h2>Преимущества сотрудничества с нами</h2>
        <div class="vykup-advantages">
          <div class="vykup-advantages__item">
            <img src="../../static/images/credit-adv1.png" alt="" />
            <p>БЕЗОПАСНАЯ СДЕЛКА</p>
            <span>Гарантируем юридическую чистоту сделки </span>
          </div>
          <div class="vykup-advantages__item">
            <img src="../../static/images/credit-adv2.png" alt="" />
            <p>БЕСПЛАТНАЯ ДИАГНОСТИКА</p>
            <span>Независимая техническая диагностика автомобиля </span>
          </div>
          <div class="vykup-advantages__item">
            <img src="../../static/images/credit-adv3.png" alt="" />
            <p>ОФОРМЛЕНИЕ ДОКУМЕНТОВ</p>
            <span>Бесплатно оформим все документы для обмена автомобиля </span>
          </div>
          <div class="vykup-advantages__item">
            <img src="../../static/images/credit-adv3.png" alt="" />
            <p>ВЫГОДНАЯ ЦЕНА</p>
            <span
              >Предложим максимально выгодную цену, как на ваш, так и на наш
              автомобиль</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="vykup-documents">
      <div class="row">
        <h2>Какие документы потребуются?</h2>
        <ul>
          <li>ПТС (Паспорт Транспортного Средства).</li>
          <li>Свидетельство о регистрации ТС (СТС).</li>
          <li>Ваш паспорт.</li>
          <li>Генеральная доверенность (если вы не собственник).</li>
        </ul>
        <h2>
          Как проводится автовыкуп машин автосалоном «Автомобили с пробегом»?
        </h2>
        <ul>
          <li>Оценка внешнего и технического состояния авто.</li>
          <li>Соглашение о выкупной стоимости транспортного средства.</li>
          <li>Получение от заказчика полного пакета документов на авто.</li>
          <li>
            Проверка юридической чистоты документации. Заключение договора.
          </li>
          <li>Получение денежных средств от продажи машины.</li>
        </ul>
        <h2>
          Какие транспортные средства мы принимаем? При скупке авто в Москве вы
          сможете сдать следующие машины:
        </h2>
        <ul>
          <li>иномарки и отечественные;</li>
          <li>новые;</li>
          <li>праворульные;</li>
          <li>аварийные.</li>
        </ul>
        <h3>
          Вам требуется автовыкуп в Москве? Оставьте заявку на сайте или
          посетите наш офис «Автомобили с пробегом». Чтобы получить консультацию
          по срочному выкупу автомобилей, свяжитесь с консультантом «Автомобили
          с пробегом» по телефону 8(800) 500-82-97 в Москве или оставьте заявку
          и наш специалист незамедлительно свяжется с Вами.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ButtonCases } from "../../constants";
import MButtonWithModal from "../../components/ui/MButtonWithModal/MButtonWithModal.vue";
export default {
  components: {
    MButtonWithModal,
  },

  static: {
    ButtonCases,
  },
  async created() {
    if (this.cars.length === 0) {
      await this.$store.dispatch("getCars");
    }
  },
  computed: {
    cars() {
      return this.$store.getters.CARS;
    },
  },
};
</script>
<style lang="scss" src="./style.scss" scoped></style>
