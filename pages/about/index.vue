<template>
  <div class="about">
    <div class="row">
      <div class="about-row">
        <div class="about-row__text row-text">
          <div class="row-text__title">
            <h1>О компании</h1>
          </div>
          <div class="row-text__h3">
            <h3>Коротко о главном</h3>
          </div>
          <div class="row-text__p">
            <p>
              В «стенах» нашего автопортала собраны сотни подержанных
              автомобилей, прошедших техническую и юридическую экспертизу, а
              также новые автомобили и коммерческий транспорт. Проверенные
              временем, опытные автодилеры формируют каталог Автомобили с
              пробегом, объединяя сотни автомобилей на одной площадке. Это
              удобно покупателям — тот случай, когда огромный выбор непременно
              переходит в качественную покупку. Это, безусловно, удобно для
              автосалонов — десятки тысяч человек ежедневно просматривают
              предложения, звонят, узнают об акциях и подарках.
            </p>
          </div>
          <div class="row-text__h3">
            <h3>Формирование парка</h3>
          </div>
          <div class="row-text__p">
            <p>
              Что делает нас успешнее и прогрессивнее? Это уникальность и
              продуманность автопарка – у нас собраны наиболее востребованные и
              удачные модели самых разнообразных марок. Проверка отдельно взятой
              модели начинается на этапе ее закупки и затем — продолжается во
              время предпродажной подготовки.
            </p>
          </div>
          <div class="row-text__h3">
            <h3>Наши принципы</h3>
          </div>
          <div class="row-text__p">
            <p>
              Каждый день мы стремимся сделать покупку авто безопасной,
              цивилизованной и доступной, что и стало визитной карточкой
              Автомобили с пробегом. Выгодный автокредит, детальная информация о
              товаре, гарантия и подарки — то, ради чего люди приходят на наш
              автопортал. Мы сформировали культурный б/у-сегмент в сфере
              автоторговли и не собираемся останавливаться на достигнутом
            </p>
          </div>
          <div class="row-text__h3">
            <h3>Перспективы</h3>
          </div>
          <div class="row-text__p">
            <p>
              За 3 года мы помогли более 50 000 человек найти подходящий
              автомобиль по приемлемой цене. Все большее количество салонов
              хотят сотрудничать с нами, однако, нашим критериям отвечают далеко
              не все. Не секрет, что автомобильный рынок столицы долгое время
              находился в тени, а мы ломаем этот стереотип. Потому и отклики
              клиентов полностью отражают нашу политику.
            </p>
          </div>
          <div class="row-text__btn">
            <m-button-with-modal :name="$options.static.ButtonCases.CALLBACK" />
          </div>
        </div>
        <div class="about-row__img">
          <img src="../../static/images/about.jpg" alt="" />
        </div>
      </div>
      <div class="about-advantages">
        <div class="about-advantages__item">
          <img src="../../static/images/podbor1.png" alt="" />
          <p>5 лет</p>
          <span>стажа работы </span>
        </div>
        <div class="about-advantages__item">
          <img src="../../static/images/podbor2.png" alt="" />
          <p>Профильные</p>
          <span>сервисные центры </span>
        </div>
        <div class="about-advantages__item">
          <img src="../../static/images/podbor3.png" alt="" />
          <p>Более 5000</p>
          <span>довольных клиентов </span>
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