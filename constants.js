import { Cars } from "./cars";

export const ButtonCases = Object.freeze({
  CALLBACK: "Обратный звонок",
  ORDER: "Оставить заявку",
  CREDIT: "Рассчитать кредит",
  TRADE_IN: "Скидка по TRADE-IN",
  TRAID_IN_EXCHANGE: "Скидка при обмене TRADE-IN",
  CREDIT_ORDER: "Оформить заявку",
  INSTALLMENT: "Оформить в рассрочку",
  PODBOR: "Оформить заявку на подбор",
  VYKUP: "Оформить заявку на выкуп",
});

export const MenuItems = [
  {
    name: "Автомобили в наличии",
    link: "/catalog",
  },
  {
    name: "Заявка на автокредит",
    link: "/credit",
  },
  {
    name: "Обмен trade-in",
    link: "/trade-in",
  },
  {
    name: "Подбор автомобиля",
    link: "/podbor",
  },
  {
    name: "Срочный выкуп",
    link: "/vykup",
  },
  {
    name: "О компании",
    link: "/about",
  },
  {
    name: "Контакты",
    link: "/contacts",
  },
];

export const MainSliderSlides = [
  {
    id: 1,
    name: "Выгодный автокредит!",
    description: "Скидка до 100000 рублей!",
    content: [
      "Одобрение по паспорту и правам",
      "Первый взнос от 0%",
      "Широкий выбор кредитных программ",
    ],
    img: "/images/bg1.jpg",
    btnLink: "/credit",
    btnText: "Подробнее",
  },
  {
    id: 2,
    name: "Меняйся с выгодой!",
    description: "Скидка при обмене автомобиля до 50 000 ₽",
    content: [
      "В рассрочку или в кредит",
      "Оценка по рыночной стоимости",
      "Получите максимально возможную цену!",
    ],
    img: "/images/bg2.jpg",
    btnLink: "/trade-in",
    btnText: "Подробнее",
  },
  {
    id: 3,
    name: "Огромный выбор автомобилей с пробегом",
    description: "Осуществите свою мечту!",
    content: [
      "Только проверенные автомобили",
      "Юридическая чистота 100%",
      "Полная история всех автомобилей",
    ],
    img: "/images/bg3.jpg",
    btnLink: "/catalog",
    btnText: "Подробнее",
  },
];

export const SecondarySliderSlides = [
  {
    id: 1,
    name: "Огромный выбор авто в наличии",
    description: "Покупайте проверенные авто с пробегом в кредит",
    img: "/images/bg4.jpg",
    btnLink: "/catalog",
    btnText: "Подробнее",
  },
  {
    id: 2,
    name: "Срочный выкуп авто",
    description: "Бесплатная оценка и диагностика, рыночная цена 100%",
    img: "/images/bg5.webp",
    btnLink: "/vykup",
    btnText: "Подробнее",
  },
  {
    id: 3,
    name: "Лучший TRADE-IN в столице",
    description: "Обменяйте автомобиль с выгодой до 100 000 руб.",
    img: "/images/bg6.jpg",
    btnLink: "/trade-in",
    btnText: "Подробнее",
  },
];

/**
 *
 * @param {number} param
 * @return {object|null}
 */

export const getCar = (param) => {
  const car = Cars.find(({ id }) => id === param);
  return car != null ? car : null;
};

/**
 *
 * @return {{array<object>} }
 */

export const getUniqueCarTitles = () => {
  return [...new Set(Cars.map(({ title }) => title))];
};

/**
 *
 * @param {string} param
 * @return {Array}
 */
const mapAndUniqueFilters = (param) => {
  return [...new Set(Cars.map((key) => key[param]))];
};
//const filterNames = ["carTitles", "carModels", "carEngines", "carKpps", "carBodys", "carYearFroms"]
export const Filters = Object.freeze({
  carTitles: mapAndUniqueFilters("title"),
  carModels: mapAndUniqueFilters("model"),
  carEngines: mapAndUniqueFilters("engine"),
  carKpps: mapAndUniqueFilters("kpp"),
  carBodys: mapAndUniqueFilters("body"),
  carYearFroms: mapAndUniqueFilters("year_from"),
});

export const Queries = {
  carTitle: "",
  carModel: "",
  carEngine: "",
  carKpp: "",
  carBody: "",
  carYearFrom: "",
  carPrice: "",
};

export const SITE_DOMEN = "http://cars.onhh.ru";
