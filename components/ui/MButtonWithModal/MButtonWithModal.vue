<template>
  <div :class="{ 'button-with-modal-wrapper': !isBanner }">
    <m-banner
      v-if="isBanner"
      :banner-type="bannerType"
      :car="car"
      @banner-clicked="onBannerClicked"
    />
    <m-button v-else :name="name" @btn-clicked="onBtnClicked" />
    <portal to="app">
      <m-modal
        v-if="isShowModal"
        @on-modal-close-click="onModalCloseClicked"
        :modal-type="name"
      >
        <div class="modal-container">
          <div class="credit-info" v-if="credit && isCarExist">
            <div class="credit-info__title">
              Автомобили с пробегом в кредит на выгодных условиях!
            </div>
            <div class="credit-info__row credit-row">
              <div class="credit-row__item credit-item">
                <img src="../../../static/images/1.png" alt="" />
                <div class="credit-item__title">Одобрение онлайн</div>
                <div class="credit-item__subtitle">
                  Не нужно никуда ехать. Мы сообщим Вам все по телефону.
                </div>
              </div>
              <div class="credit-row__item credit-item">
                <img src="../../../static/images/2.png" alt="" />
                <div class="credit-item__title">Очень низкие ставки</div>
                <div class="credit-item__subtitle">
                  У нас много банков-партнеров, подберем лучший вариант.
                </div>
              </div>
              <div class="credit-row__item credit-item">
                <img src="../../../static/images/3.png" alt="" />
                <div class="credit-item__title">
                  Самый высокий процент одобрения
                </div>
                <div class="credit-item__subtitle">
                  Большой выбор банков, которые конкурируют за наших клиентов
                </div>
              </div>
              <div class="credit-row__item credit-item">
                <img src="../../../static/images/4.png" alt="" />
                <div class="credit-item__title">Лучшие цены на авто</div>
                <div class="credit-item__subtitle">
                  Большой автопарк, большой объем продаж, можно поторговаться.
                </div>
              </div>
            </div>
          </div>
          <div class="trade-in-info" v-if="tradein && isCarExist">
            <div class="trade-in-info__title">
              Хочу обменять свой автомобиль по программе Трейд-ИН:
            </div>
            <div class="trade-in-info__row trade-in-row">
              <div class="trade-in-row__item trade-in-item">
                <img src="../../../static/images/tra1.png" alt="" />
                <div class="trade-in-item__title">Выберите автомобиль</div>
              </div>
              <div class="trade-in-row__item trade-in-item">
                <img src="../../../static/images/tra2.png" alt="" />
                <div class="trade-in-item__title">Заполните заявку</div>
              </div>
              <div class="trade-in-row__item trade-in-item">
                <img src="../../../static/images/tra3.png" alt="" />
                <div class="trade-in-item__title">С вами свяжется менеджер</div>
              </div>
              <div class="trade-in-row__item trade-in-item">
                <img src="../../../static/images/tra4.png" alt="" />
                <div class="trade-in-item__title">Едете на оформление</div>
              </div>
            </div>
          </div>
          <div class="modal-container__cars">
            <m-filters-with-cars
              v-if="isCarExist"
              :car="car"
              :is-no-car="isNoCar"
              :cars="cars"
              @car-changed="changeCar"
            />
            <!-- <div v-if="isCarExist" class="advantages">
              <div class="advantages__trade-in trade-in" v-if="tradein">
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
              <div class="advantages__credit credit" v-if="credit">
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
            </div> -->
            <div :class="{ 'modal-container__form': isCarExist }">
              <m-form
                :name="name"
                :car="widgetCar"
                @close-popup="onModalCloseClicked"
              />
              <div v-if="tradein && isCarExist">
                <m-calc-sum :car-price="carPrice" />
              </div>
            </div>
          </div>
          <div class="credit-advantages" v-if="credit && isCarExist">
            <div class="credit-advantages__item advantages-item">
              <div class="advantages-item__title">Требования к клиентам</div>
              <ul>
                <li>Гражданство РФ;</li>
                <li>
                  Минимальный пакет документов: паспорт РФ, СНИЛС, водительское
                  удостоверение РФ;
                </li>
                <li>Стаж на текущем месте работы не менее 3-х месяцев;</li>
                <li>
                  Возраст – не менее 20 лет на момент подачи заявки и не более
                  69 лет на момент погашения кредита;
                </li>
                <li>
                  Для индивидуальных предпринимателей дополнительно
                  свидетельство ИНН и ОГРН.
                </li>
              </ul>
            </div>
            <div class="credit-advantages__item advantages-item">
              <div class="advantages-item__title">Условия кредитования</div>
              <ul>
                <li>Срок кредитования от 6 месяцев до 7 лет;</li>
                <li>Без первоначального взноса и подтверждения дохода;</li>
                <li>Автокредит без полиса КАСКО;</li>
                <li>Досрочное погашение без штрафов и комиссий;</li>
                <li>
                  Программа Trade-In (Ваш автомобиль в качестве первоначального
                  взноса с выгодой до 100 000 руб.)
                </li>
              </ul>
            </div>
          </div>
          <div class="trade-in-advantages" v-if="tradein && isCarExist">
            <div class="trade-in-advantages__item advantages-item">
              <div class="advantages-item__title">Условия программы</div>
              <ul>
                <li>Бесплатная оценка автомобиля;</li>
                <li>Быстрое оформление сделки за 45 минут;</li>
                <li>Оценка стоимости автомобиля по рыночной цене;</li>
                <li>
                  Ваш автомобиль может выступать в качестве первоначального
                  взноса по кредиту;
                </li>
                <li>Экспресс-оценка автомобиля по телефону.</li>
              </ul>
            </div>
            <div class="trade-in-advantages__item advantages-item">
              <div class="advantages-item__title">
                Преимущества программы Trade-in
              </div>
              <ul>
                <li>Выгода до 50 000 руб. на приобретаемый автомобиль;</li>
                <li>Экономия времени;</li>
                <li>Юридическая чистота сделки;</li>
                <li>Удобная форма оплаты;</li>
                <li>Подарки при покупке автомобиля по системе Trade-in.</li>
              </ul>
            </div>
            <div class="trade-in-advantages__item advantages-item">
              <div class="advantages-item__title">Требования к клиентам</div>
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
          <div class="credit-banks" v-if="credit && isCarExist">
            <div class="credit-banks__title">Банки-Партнеры</div>
            <img src="../../../static/images/banks.png" alt="" />
            <div class="credit-banks__subtitle">
              Газпром ОАО «Газпромбанк», Банк ВТБ (ПАО), ПАО Сбербанк, «Кредит
              Европа Банк», Альфа-Банк
            </div>
          </div>
        </div>
      </m-modal>
    </portal>
  </div>
</template>

<script>
import { Portal } from "portal-vue";
import MButton from "../MButton.vue";
import MModal from "../MModal/MModal.vue";
import MForm from "../MForm/MForm.vue";
import MFiltersWithCars from "../MFiltersWithCars/MFiltersWithCars.vue";
import MCalcSum from "../MCalcSum/MCalcSum.vue";
import MBanner from "../MBanner/MBanner.vue";
import { ButtonCases } from "../../../constants";
export default {
  components: {
    MButton,
    MModal,
    MForm,
    MFiltersWithCars,
    Portal,
    MBanner,
    MCalcSum,
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
    cars: {
      type: Array,
      default: () => [],
    },
    isNoCar: {
      type: Boolean,
      default: false,
    },
    isBanner: {
      type: Boolean,
      default: false,
    },
    bannerType: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      isShowModal: false,
      widgetCar: null,
    };
  },
  static: {
    ButtonCases,
  },
  created() {
    if (this.car == null) {
      return;
    }
    this.widgetCar = this.car;
  },
  computed: {
    isIncludesOrderRequest() {
      return this.name.includes("мес. Оформить заявку");
    },
    credit() {
      return (
        this.name === this.$options.static.ButtonCases.CREDIT ||
        this.name === this.$options.static.ButtonCases.CREDIT_ORDER ||
        this.isIncludesOrderRequest
      );
    },
    tradein() {
      return (
        this.name === this.$options.static.ButtonCases.TRADE_IN ||
        this.name === this.$options.static.ButtonCases.TRAID_IN_EXCHANGE
      );
    },
    isCarExist() {
      return this.car != null || this.isNoCar;
    },
    carPrice() {
      return this.widgetCar?.price ?? 0;
    },
  },
  methods: {
    onBtnClicked() {
      this.isShowModal = true;
    },
    onBannerClicked() {
      this.isShowModal = true;
    },
    onModalCloseClicked() {
      this.isShowModal = false;
    },
    changeCar(car) {
      this.widgetCar = car;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
