<template>
  <header class="header">
    <div class="header-content">
      <div class="header-top">
        <div class="header-top__content row">
          <div class="header-city">
            <nuxt-link class="header-city__link" to="/">
              <img src="../../../static/images/location.png" alt="" />
              <span>г. Москва</span></nuxt-link
            >
          </div>
          <div class="header-adress">
            <img src="../../../static/images/clock.png" alt="" />
            <span>Ежедневно с 09.00 до 22.00</span>
          </div>
          <div class="header-phones">
            <img src="../../../static/images/phone-img.png" alt="" />
            <span>
              <a href="tel:+78005005397">+7 (800) 555 41-30</a>
              <a href="tel:+74955404162">+7 (495) 513 11-97</a>
            </span>
          </div>
          <div class="header-btn">
            <m-button-with-modal
              :cars="cars"
              :name="$options.static.ButtonCases.CALLBACK"
            />
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="header-bottom__content row">
          <div class="header-logo">
            <nuxt-link to="/"
              ><img
                class="header-logo__img"
                src="../../../static/images/logo2.svg"
                alt=""
            /></nuxt-link>
          </div>
          <div class="header-menu">
            <div class="header-menu__list">
              <ul>
                <li
                  v-for="{ name, link } in $options.static.MenuItems"
                  :key="name"
                >
                  <nuxt-link :to="link">{{ name }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <transition name="fade">
            <div
              class="header-menu__mobile menu-mobile"
              v-if="isShowMenuMobile"
            >
              <div class="menu-mobile__list">
                <div class="menu-mobile__close" @click="toggleIsShowMenuMobile">
                  <span></span>
                  <span></span>
                </div>
                <m-button-with-modal
                  :cars="cars"
                  :name="$options.static.ButtonCases.CALLBACK"
                />
                <ul>
                  <li
                    v-for="{ name, link } in $options.static.MenuItems"
                    :key="name"
                    @click="toggleIsShowMenuMobile"
                  >
                    <nuxt-link :to="link">{{ name }}</nuxt-link>
                  </li>
                </ul>
                <div class="menu-mobile__contacts contacts">
                  <div class="contacts__content">
                    <div class="contacts__adress">
                      г. Москва, ул. Западная, д. 34
                    </div>
                    <div class="contacts__phone">+7 (999) 444 55-55</div>
                    <div class="contacts__mail">mail@yandex.ru</div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="header-toggle" @click="toggleIsShowMenuMobile">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ButtonCases, MenuItems } from "../../../constants";
import MButtonWithModal from "../../ui/MButtonWithModal/MButtonWithModal.vue";
export default {
  data() {
    return {
      isShowMenuMobile: false,
    };
  },
  props: {
    cars: {
      type: Array,
      default: () => [],
    },
  },
  components: { MButtonWithModal },
  static: {
    ButtonCases,
    MenuItems,
  },
  methods: {
    toggleIsShowMenuMobile() {
      this.isShowMenuMobile = !this.isShowMenuMobile;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
