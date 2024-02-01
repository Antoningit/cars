<template>
  <div v-if="car !== null" class="car-card">
    <div class="car-card__banners-and-car">
      <div class="car-card__banners row">
        <div class="car-card__banner">
          <m-button-with-modal
            :name="$options.static.ButtonCases.CREDIT"
            :is-banner="true"
            :is-no-car="true"
          />
        </div>
        <div class="car-card__second-banner">
          <m-button-with-modal
            :name="$options.static.ButtonCases.CREDIT"
            :is-banner="true"
            :car="car"
            :banner-type="2"
          />
        </div>
      </div>
      <div class="car-card__main card-main">
        <div class="card-main__content row">
          <div class="car-card__title">
            <h1>
              {{ car.title }} {{ car.model }}, {{ car.mod }} {{ car.year_from }}
            </h1>
          </div>
          <div class="car-card__subtitle mt-1">
            {{ car.title }} {{ car.model }}, {{ car.year_from }} года выпуска,
            пробег {{ car.mileage }} км, модификация {{ car.mod }}
            {{ car.engine }} {{ car.kpp }}, {{ car.drive }} привод, цвет
            {{ car.color }}, ПТС
            {{ car.pts }}
          </div>
          <div class="car-card__content card-content">
            <div class="card-content__slider">
              <m-slider-with-ligth-box :slides="car.images" />
              <div class="card-content__additional additional-content">
                <div class="additional-content__title">
                  Заинтересовал автомобиль?
                </div>
                <div class="additional-content__description">
                  Специалист отдела продаж ответит на любые вопросы по
                  автомобилю.
                </div>
                <div class="additional-content__btns content-btns">
                  <div class="content-btns__trade-in">
                    <m-button-with-modal
                      :name="$options.static.ButtonCases.TRADE_IN"
                      :car="car"
                    />
                  </div>
                  <div class="content-btns__credit">
                    <m-button-with-modal :name="creditBtnName" :car="car" />
                  </div>
                  <div class="content-btns__link">
                    <a href="tel:+78005005397" style="color: #000"
                      >+7 (800) 500 53-97</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card-content__info info">
              <div class="info__content content-info">
                <div class="content-info__specifications specifications-text">
                  <div class="specifications-text__subtitle mb-1">Цена</div>
                  <div class="specifications-text__price mb-1">
                    {{ carPrice }} ₽
                  </div>
                  <div class="specifications-text__old-price mb-1">
                    {{ carOldPrice }} ₽
                  </div>
                  <div class="specifications-text__trade-in">
                    <m-button-with-modal
                      :name="$options.static.ButtonCases.TRADE_IN"
                      :car="car"
                    />
                  </div>
                  <div class="specifications-text__modification modification">
                    <div class="modification__icon">
                      <img src="../../../static/images/car1.png" alt="" />
                    </div>
                    <div class="modification__text modification-text">
                      <div class="modification-text__title">
                        {{ car.mod }}
                      </div>
                      <div class="modification-text__description">
                        Модификация автомобиля
                      </div>
                    </div>
                  </div>
                  <div class="specifications-text__modification modification">
                    <div class="modification__icon">
                      <img src="../../../static/images/car2.png" alt="" />
                    </div>
                    <div class="modification__text modification-text">
                      <div class="modification-text__title">
                        {{ car.engine }} / {{ car.kpp }}
                      </div>
                      <div class="modification-text__description">
                        Тип двигателя и коробки передач
                      </div>
                    </div>
                  </div>
                  <div class="specifications-text__modification modification">
                    <div class="modification__icon">
                      <img src="../../../static/images/car3.png" alt="" />
                    </div>
                    <div class="modification__text modification-text">
                      <div class="modification-text__title">
                        {{ car.year_from }}
                      </div>
                      <div class="modification-text__description">
                        Год выпуска
                      </div>
                    </div>
                  </div>
                  <div class="specifications-text__modification modification">
                    <div class="modification__icon">
                      <img src="../../../static/images/car4.png" alt="" />
                    </div>
                    <div class="modification__text modification-text">
                      <div class="modification-text__title">
                        {{ car.mileage }} км.
                      </div>
                      <div class="modification-text__description">
                        Пробег автомобиля
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content-info__offer offer-text">
                  <div class="offer-text__subtitle mb-1">В кредит</div>
                  <div class="offer-text__traid-in">
                    <m-button-with-modal :name="creditBtnName" :car="car" />
                  </div>
                  <div class="offer-text__banner">
                    <m-button-with-modal
                      :name="$options.static.ButtonCases.CREDIT"
                      :is-banner="true"
                      :car="car"
                      :banner-type="5"
                    />
                  </div>
                </div>
              </div>
              <div class="info__advantages content-advantages">
                <div class="content-advantages__grid-content grid-content">
                  <div class="grid-content__img">
                    <img src="../../../static/images/check.png" alt="" />
                  </div>
                  <div class="grid-content__text">
                    <div class="grid-content__title">
                      Только проверенные автомобили
                    </div>
                    <div class="grid-content__description">
                      Все автомобили прошли проверку юридической чистоты.
                    </div>
                  </div>
                </div>
                <div class="content-advantages__grid-content grid-content">
                  <div class="grid-content__img">
                    <img src="../../../static/images/check.png" alt="" />
                  </div>
                  <div class="grid-content__text">
                    <div class="grid-content__title">
                      Проверка состояния по 92 пунктам
                    </div>
                    <div class="grid-content__description">
                      Мы продаем только технически исправные автомобили
                    </div>
                  </div>
                </div>
                <div class="content-advantages__grid-content grid-content">
                  <div class="grid-content__img">
                    <img src="../../../static/images/check.png" alt="" />
                  </div>
                  <div class="grid-content__text">
                    <div class="grid-content__title">
                      Предпродажная подготовка
                    </div>
                    <div class="grid-content__description">
                      Всегда чистый автомобиль и салон
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="car-card__bottom row">
      <div class="car-card__tab card-tab">
        <m-tabs>
          <m-tab title="Характеристики" :img="'/images/settings.png'"
            ><div class="card-tab__specifications tab-specifications">
              <div class="tab-specifications__left specifications-left">
                <div
                  class="specifications-left__flex left-flex"
                  v-for="{ title, value } in firstTabContentLeft"
                  :key="title"
                >
                  <div class="left-flex__title">{{ title }}</div>
                  <div class="left-flex__description">{{ value }}</div>
                </div>
              </div>
              <div class="tab-specifications__right specifications-right">
                <div
                  class="specifications-left__right right-flex"
                  v-for="{ title, value } in firstTabContentRight"
                  :key="title"
                >
                  <div class="right-flex__title">{{ title }}</div>
                  <div class="right-flex__description">{{ value }}</div>
                </div>
              </div>
            </div></m-tab
          >
          <m-tab title="Преимущества" :img="'/images/badge.png'"
            ><div class="card-tab__advantages tab-advantages">
              <p>Оригинал ПТС</p>
              <span>
                У этого автомобиля имеется оригинал ПТС, что является
                дополнительной гарантией юридической чистоты и показывает
                прозрачность его истории.
              </span>

              <p>2 комплекта резины</p>
              <span>
                При покупке автомобиля Вы получаете 2 комплекта шин для зимнего
                и летнего сезона. Вам не придется докупать новый комплект
                покрышек к новому сезону.
              </span>

              <p>1 год гарантии на коробку и двигатель</p>
              <span>
                Наш автосалон предоставляет годовую гарантию на двигатель и
                коробку передач, вне зависимости от пробега.
              </span>

              <p>Выгодный кредит</p>
              <span>
                Специальное условия на автокредитование:<br />
                Для всех регионов РФ;<br />
                - Процентная ставка от 6.7%<br />
                - Первоначальный взнос от 0%;<br />
                - Срок кредитования от 3 до 60 мес;<br />
                - Нужен только паспорт и водительское удостоверение;<br />
                - КАСКО – по желанию.
              </span>

              <p>Информация соответствует действительности!</p>
              <span>
                Вся заявленная информация соответствует действительности! Все
                автомобили 100% в наличии.<br />
                Все указанные автомобили и цены в объявлениях реальны и никаких
                расхождений нет!
              </span>
            </div></m-tab
          >
          <m-tab title="Описание" :img="'/images/car.png'"
            ><div
              v-html="car.description"
              class="card-tab__advantages tab-advantages"
            ></div
          ></m-tab>
        </m-tabs>
      </div>
      <div class="car-card__installment">
        <m-credit-installment-with-modal />
      </div>
      <div class="car-card__gift">
        <m-button-with-modal
          :name="$options.static.ButtonCases.CREDIT"
          :is-banner="true"
          :car="car"
          :banner-type="3"
        />
      </div>
    </div>
    <div class="car-card__footer">
      <div class="row">
        <div class="car-card__images-flex">
          <m-button-with-modal
            :name="$options.static.ButtonCases.CREDIT"
            :is-banner="true"
            :car="car"
            :banner-type="4"
          />
        </div>
        <div class="car-card__other card-other" v-if="otherCars.length > 0">
          <div class="card-other__title">
            <h2>Другие автомобили {{ car.title }}</h2>
          </div>
          <div class="card-other__cars">
            <!-- <m-cars :cars="otherCars"></m-cars> -->
            <m-cars-with-owl-carousel :cars="otherCars" />
          </div>
        </div>
        <div class="car-card__latest card-latest" v-if="latestCars.length > 0">
          <div class="card-latest__title">
            <h2>Последние поступления</h2>
          </div>
          <div class="card-latest__cars">
            <m-cars-with-owl-carousel :cars="latestCars" />
          </div>
        </div>
      </div>
    </div>
    <div class="car-card__brands car-brands">
      <m-cars-titles-and-imgs :with-imgs="true" :car-title="car.title" />
    </div>
  </div>
  <!-- <div v-else class="not-found-car row">
    Автомобиля не найдено. <nuxt-link to="/">Вернуться на главную</nuxt-link>
  </div> -->
</template>

<script>
import { getCar, ButtonCases, Months, MonthsOther } from "../../../constants";
//import { Cars } from "../../../cars";
import MTab from "../../../components/ui/MTabs/MTab.vue";
import MTabs from "../../../components/ui/MTabs/MTabs.vue";
import MSliderWithLigthBox from "../../../components/ui/MSliderWithLightBox/MSliderWithLightBox.vue";
import MButtonWithModal from "../../../components/ui/MButtonWithModal/MButtonWithModal.vue";
import MCars from "../../../components/common/MCars/MCars.vue";
import MCreditInstallmentWithModal from "../../../components/ui/MCreditInstallmentWithModal/MCreditInstallmentWithModal.vue";
import MCarsWithOwlCarousel from "../../../components/common/MCarsWithOwlCarousel/MCarsWithOwlCarousel.vue";
import MCarsTitlesAndImgs from "../../../components/common/MCarsTitlesAndImgs/MCarsTitlesAndImgs.vue";
export default {
  components: {
    MSliderWithLigthBox,
    MButtonWithModal,
    MCars,
    MTab,
    MTabs,
    MCreditInstallmentWithModal,
    MCarsWithOwlCarousel,
    MCarsTitlesAndImgs,
  },
  data() {
    return {
      car: null,
    };
  },
  static: {
    ButtonCases,
  },
  async created() {
    const car = getCar(this.cars, Number(this.$route.params.car));
    if (car == null) {
      const carFromApi = await this.$store.dispatch("getCarById", {
        id: Number(this.$route.params.car),
      });
      this.car = carFromApi.length > 0 ? carFromApi[0] : null;
      return;
    }
    this.car = car;
  },
  computed: {
    cars() {
      return this.$store.getters.CARS;
    },
    creditBtnName() {
      const i = 8.5 / 12 / 100;
      const period = 7;
      const koef =
        (i * Math.pow(1 + i, period * 12)) / (Math.pow(1 + i, period * 12) - 1);
      const result = this.car.price * koef;
      return `от ${result.toFixed()} ₽ / мес. Оформить заявку`;
    },
    carPrice() {
      return Number(this.car.price).toLocaleString();
    },
    carOldPrice() {
      return Number(this.car.old_price).toLocaleString();
    },
    otherCars() {
      return this.cars.filter(
        ({ title, id }) => title === this.car.title && id !== this.car.id
      );
    },
    latestCars() {
      return this.cars.filter(({ latest }) => latest);
    },
    firstTabContentLeft() {
      return [
        { title: "Год выпуска", value: this.car.year_from },
        { title: "Пробег", value: this.car.mileage },
        { title: "Модификация", value: this.car.mod },
        { title: "Тип двигателя", value: this.car.engine },
        { title: "Объём двигателя", value: this.car.engine_volume },
        { title: "КПП", value: this.car.kpp },
        { title: "Тип кузова", value: this.car.body },
      ];
    },
    firstTabContentRight() {
      return [
        { title: "Привод", value: this.car.drive },
        { title: "Цвет", value: this.car.color },
        { title: "Руль", value: this.car.wheel },
        { title: "Таможня", value: this.car.customs },
        { title: "ПТС", value: this.car.pts },
        { title: "Владельцев по ПТС", value: this.car.owners_by_pts },
        { title: "Торг", value: this.car.auction ? "Да" : "Нет" },
      ];
    },
    currentMonth() {
      return Months[new Date().getMonth()];
    },
    currentMonthOther() {
      return MonthsOther[new Date().getMonth()];
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
