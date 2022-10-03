<template>
  <div class="podbor">
    <div class="row">
      <div class="podbor-row">
        <div class="podbor-row__text row-text">
          <div class="row-text__title">
            <h1>Думаете о приобретении автомобиля с пробегом? Поможем!</h1>
          </div>
          <div class="row-text__ul">
            <ul>
              <li>Выявить истинное техническое состояние автомобиля</li>
              <li>Проверить по ГИБДД и залоговым базам</li>
              <li>Снизить цену на понравившийся автомобиль</li>
              <li>Помочь в оформлении всех документов и регистрации в ГИБДД</li>
            </ul>
          </div>
          <div class="row-text__p">
            <p>Оформив заявку, вы бесплатно получите:</p>
          </div>
          <div class="row-text__ul">
            <ul>
              <li>Анализ текущего состояния автомобильного рынка</li>
              <li>
                Консультацию по техническим особенностям интересующих Вас
                моделей
              </li>
              <li>
                Наши профессиональные рекомендации и предложение возможных
                альтернативных вариантов
              </li>
            </ul>
          </div>
          <div class="row-text__btn">
            <m-button-with-modal :name="$options.static.ButtonCases.PODBOR" />
          </div>
        </div>
        <div class="podbor-row__img">
          <img src="../../static/images/podbor.jpg" alt="" />
        </div>
      </div>
      <div class="podbor-advantages">
        <div class="podbor-advantages__item">
          <img src="../../static/images/podbor1.png" alt="" />
          <p>5 лет</p>
          <span>стажа работы </span>
        </div>
        <div class="podbor-advantages__item">
          <img src="../../static/images/podbor2.png" alt="" />
          <p>Профильные</p>
          <span>сервисные центры </span>
        </div>
        <div class="podbor-advantages__item">
          <img src="../../static/images/podbor3.png" alt="" />
          <p>Более 5000</p>
          <span>довольных клиентов </span>
        </div>
      </div>
      <div class="podbor-additional">
        <h3>
          Работа без ограничений по времени, количеству осмотренных автомобилей.
          Подбор и полная проверка автомобиля перед покупкой.
        </h3>
        <div class="podbor-additional__ul">
          <ul>
            <li>Персональный специалист</li>
            <li>Ежедневный анализ рынка по заданным параметрам</li>
            <li>
              Проведение комплексной диагностики автомобилей в автосервисах
              наших партнеров
            </li>
            <li>
              Запрос дилерской истории (проведение ТО, история ремонтов, пробег)
            </li>
            <li>Проверка по ГИБДД, залоговым и страховым базам</li>
            <li>
              Торг –
              <span class="podbor-additional__red"
                >стоимость наших услуг зачастую компенсируется за счет данной
                услуги</span
              >
            </li>
            <li>Контроль проведения сделки по покупке автомобиля</li>
            <li>Выдача заключительного листа диагностики</li>
          </ul>
        </div>
        <div class="podbor-additional__p">
          <p>
            Мы пройдем вместе, шаг за шагом, весь путь от поиска до постановки
            на учет, поможем, проверим, подскажем, уберем возможные риски!
          </p>
          <p>
            Все сомнения и нерешительность, которые преследуют многих, минуют
            Вас, и Вы получите прекрасный результат в виде
            <span class="podbor-additional__red">отличного автомобиля!</span>
          </p>
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