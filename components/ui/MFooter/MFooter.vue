<template>
  <footer>
    <div class="footer">
      <div class="row">
        <div class="footer-content">
          <div class="footer-content__about">
            <div class="footer-content__title">О компании</div>
            <div class="about__text">
              <p>
                В нашем дилерском центре представлены все ведущие банки, что
                позволяет всем нашим клиентам, после подбора автомобиля
                приступить к выбору кредитной программы, не расходуя время на
                поездки в банк, простой в очереди и т.д., а главным аспектом
                является приобретение автомобиля в день обращения, т. е. все
                желающие приобрести автомобиль независимо от места постоянной
                регистрации и кредитного продукта могут приобрести автомобиль за
                1-2 часа.
              </p>
            </div>
          </div>
          <div class="footer-content__schedule">
            <div class="footer-content__title">График работы</div>
            <div class="schedule__list">
              <ul>
                <li>Понедельник 9:00 - 21:00 (без перерыва)</li>
                <li>Вторник 9:00 - 21:00 (без перерыва)</li>
                <li>Среда 9:00 - 21:00 (без перерыва)</li>
                <li>Четверг 9:00 - 21:00 (без перерыва)</li>
                <li>Пятница 9:00 - 21:00 (без перерыва)</li>
                <li>Суббота 9:00 - 21:00 (без перерыва)</li>
                <li>Воскресение 9:00 - 21:00 (без перерыва)</li>
              </ul>
            </div>
          </div>
          <div class="footer-content__contacts">
            <div class="footer-content__title">Контакты</div>
            <div class="contacts__content">
              <div class="contacts__adress">г. Москва, ул. Западная, д. 34</div>
              <div class="contacts__phone">+7 (999) 444 55-55</div>
              <div class="contacts__mail">mail@yandex.ru</div>
            </div>
          </div>
          <div class="footer-content__menu content-menu">
            <div class="footer-content__title">Навигация</div>
            <ul>
              <li
                v-for="{ name, link } in $options.static.MenuItems"
                :key="name"
                class="content-menu__li"
              >
                <nuxt-link class="content-menu__links" :to="link">{{
                  name
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div
            class="footer-content__actual content-actual"
            v-if="!isCatalogPage"
          >
            <div class="footer-content__title">Топ</div>
            <div
              v-for="actualCar in actualCars"
              class="content-actual__links"
              :key="actualCar"
              @click="goToCatalog(actualCar)"
            >
              {{ actualCar }}
            </div>
          </div>
          <div v-else class="footer-content__btn">
            <m-button-with-modal
              :name="$options.static.ButtonCases.CREDIT_ORDER"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="row">
        Обращаем Ваше внимание на то, что данный интернет-сайт носит
        исключительно информационный характер и ни при каких условиях не
        является публичной офертой, определяемой положениями ч. 2 ст. 437
        Гражданского кодекса Российской Федерации. Для получения подробной
        информации о стоимости автомобилей, пожалуйста, обратитесь к менеджерам
        автосалона. Осуществляя навигацию по сайту, Вы даете нам право
        запоминать и иметь доступ к куки-файлам на Вашем устройстве доступа к
        Интернету.
      </div>
    </div>
  </footer>
</template>

<script>
import { getUniqueCarTitles, MenuItems, ButtonCases } from "../../../constants";
import MButtonWithModal from "../../../components/ui/MButtonWithModal.vue";
export default {
  components: {
    MButtonWithModal,
  },
  data() {
    return {
      actualCars: [],
    };
  },
  static: {
    MenuItems,
    ButtonCases,
  },
  created() {
    this.actualCars = getUniqueCarTitles();
  },
  computed: {
    isCatalogPage() {
      return this.$route.name === "catalog";
    },
  },
  methods: {
    goToCatalog(title) {
      this.$router.push(`/catalog/?carTitle=${title}`);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>