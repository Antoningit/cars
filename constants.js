//import { Cars } from "./cars";

export const ButtonCases = Object.freeze({
  CALLBACK: "Заказать звонок",
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
    img: "/images/banner1.jpg",
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
    img: "/images/banner5.jpg",
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
    img: "/images/banner6.jpg",
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

export const ThirdSliderSlides = [
  {
    id: 1,
    name: "Седаны",
    description: "Классические городские автомобили",
    img: "/images/sedan.webp",
    btnLink: "/catalog?carBody=Седан",
    btnText: "Подробнее",
  },
  {
    id: 2,
    name: "Универсалы",
    description: "Для большой семьи",
    img: "/images/universal.webp",
    btnLink: "/catalog?carBody=Универсал",
    btnText: "Подробнее",
  },
  {
    id: 3,
    name: "Минивэны",
    description: "Лучшее для путешествий",
    img: "/images/miniven.webp",
    btnLink: "/catalog?carBody=Минивэн",
    btnText: "Подробнее",
  },
  {
    id: 4,
    name: "Хэтчбеки",
    description: "То что надо для города",
    img: "/images/hetch.webp",
    btnLink: "/catalog?carBody=Хэтчбек",
    btnText: "Подробнее",
  },
  {
    id: 5,
    name: "Внедорожники",
    description: "Когда размер имеет значение",
    img: "/images/out.webp",
    btnLink: "/catalog?carBody=Внедорожник",
    btnText: "Подробнее",
  },
];

/**
 * @param {array} cars
 * @param {number} param
 * @return {object|null}
 */

export const getCar = (cars, param) => {
  const car = cars.find(({ id }) => id === param);
  return car != null ? car : null;
};

/**
 * @param {array} cars
 * @return {{array<object>} }
 */

export const getUniqueCarTitles = (cars) => {
  return [...new Set(cars.map(({ title }) => title))];
};

/**
 * @param {array} cars
 * @param {string} param
 * @return {Array}
 */
const mapAndUniqueFilters = (cars, param) => {
  return [...new Set(cars.map((key) => key[param]))];
};

//const filterNames = ["carTitles", "carModels", "carEngines", "carKpps", "carBodys", "carYearFroms"]

/**
 * @param {array} cars
 * @return {object}
 */
export const Filters = (cars) => {
  return {
    carTitles: mapAndUniqueFilters(cars, "title"),
    carModels: mapAndUniqueFilters(cars, "model"),
    carEngines: mapAndUniqueFilters(cars, "engine"),
    carKpps: mapAndUniqueFilters(cars, "kpp"),
    carBodys: mapAndUniqueFilters(cars, "body"),
    carYearFroms: mapAndUniqueFilters(cars, "year_from"),
  };
};

export const Queries = {
  carTitle: "",
  carModel: "",
  carEngine: "",
  carKpp: "",
  carBody: "",
  carYearFrom: "",
  carPrice: "",
  sort: "",
};

export const CarsTitles = [
  "Acura",
  "Audi",
  "BMW",
  "Brilliance",
  "Buick",
  "BYD",
  "Cadillac",
  "Changan ",
  "Chery",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Daewoo ",
  "Datsun",
  "Dodge ",
  "DongFeng",
  "DW Hower",
  "FAW",
  "Fiat",
  "Ford",
  "GEELY ",
  "Great Wall",
  "Haima",
  "Haval",
  "Honda",
  "Hyundai",
  "Infiniti",
  "IVECO",
  "JAC",
  "Jaguar",
  "Jeep ",
  "Kia",
  "Lada",
  "Land Rover",
  "Lexus",
  "Lifan",
  "Luxgen ",
  "Mazda",
  "Mercedes",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Ravon",
  "Renault",
  "Seat",
  "Skoda",
  "Ssang Yong",
  "Subaru",
  "Suzuki",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "Vortex",
  "Zotye",
  "Газель",
  "ЗАЗ",
  "УАЗ",
];

/* export const CarsTitlesWithImgs = CarsTitles.reduce((acc, value) => {
  return {
    ...acc,
    [value.toUpperCase().replace(/ /g, "_")]: {
      title: value,
      img: "/images/acura_id60.png", count: 0
    },
  };
}, {}); */

export const CarsTitlesWithImgs = Object.freeze({
  ACURA: {
    title: "Acura",
    img: "/images/acura.png",
    count: 0,
  },
  AUDI: {
    title: "Audi",
    img: "/images/audi.png",
    count: 0,
  },
  BMW: {
    title: "BMW",
    img: "/images/bmw.png",
    count: 0,
  },
  BRILLIANCE: {
    title: "Brilliance",
    img: "/images/brilliance.png",
    count: 0,
  },
  BUICK: {
    title: "Buick",
    img: "/images/buick.png",
    count: 0,
  },
  BYD: {
    title: "BYD",
    img: "/images/byd.png",
    count: 0,
  },
  CADILLAC: {
    title: "Cadillac",
    img: "/images/cadillac.png",
    count: 0,
  },
  CHANGAN: {
    title: "Changan",
    img: "/images/changan.png",
    count: 0,
  },
  CHERY: {
    title: "Chery",
    img: "/images/chery.png",
    count: 0,
  },
  CHEVROLET: {
    title: "Chevrolet",
    img: "/images/chevrolet.png",
    count: 0,
  },
  CHRYSLER: {
    title: "Chrysler",
    img: "/images/chrysler.png",
    count: 0,
  },
  CITROEN: {
    title: "Citroen",
    img: "/images/citroen.png",
    count: 0,
  },
  DAEWOO: {
    title: "Daewoo",
    img: "/images/daewoo.png",
    count: 0,
  },
  DATSUN: {
    title: "Datsun",
    img: "/images/datsun.png",
    count: 0,
  },
  DODGE: {
    title: "Dodge",
    img: "/images/dodge.png",
    count: 0,
  },
  DONGFENG: {
    title: "DongFeng",
    img: "/images/dongfeng.png",
    count: 0,
  },
  DW_HOWER: {
    title: "DW Hower",
    img: "/images/dwhower.png",
    count: 0,
  },
  FAW: {
    title: "FAW",
    img: "/images/faw.png",
    count: 0,
  },
  FIAT: {
    title: "Fiat",
    img: "/images/fiat.png",
    count: 0,
  },
  FORD: {
    title: "Ford",
    img: "/images/ford.png",
    count: 0,
  },
  GEELY: {
    title: "GEELY",
    img: "/images/geely.png",
    count: 0,
  },
  GREAT_WALL: {
    title: "Great Wall",
    img: "/images/greatwall.png",
    count: 0,
  },
  HAIMA: {
    title: "Haima",
    img: "/images/haima.png",
    count: 0,
  },
  HAVAL: {
    title: "Haval",
    img: "/images/haval.png",
    count: 0,
  },
  HONDA: {
    title: "Honda",
    img: "/images/honda.png",
    count: 0,
  },
  HYUNDAI: {
    title: "Hyundai",
    img: "/images/hyundai.png",
    count: 0,
  },
  INFINITI: {
    title: "Infiniti",
    img: "/images/infiniti.png",
    count: 0,
  },
  IVECO: {
    title: "IVECO",
    img: "/images/iveco.png",
    count: 0,
  },
  JAC: {
    title: "JAC",
    img: "/images/jac.png",
    count: 0,
  },
  JAGUAR: {
    title: "Jaguar",
    img: "/images/jaguar.png",
    count: 0,
  },
  JEEP: {
    title: "Jeep",
    img: "/images/jeep.png",
    count: 0,
  },
  KIA: {
    title: "Kia",
    img: "/images/kia.png",
    count: 0,
  },
  LADA: {
    title: "Lada",
    img: "/images/lada.png",
    count: 0,
  },
  LAND_ROVER: {
    title: "Land Rover",
    img: "/images/landrover.png",
    count: 0,
  },
  LEXUS: {
    title: "Lexus",
    img: "/images/lexus.png",
    count: 0,
  },
  LIFAN: {
    title: "Lifan",
    img: "/images/lifan.png",
    count: 0,
  },
  LUXGEN: {
    title: "Luxgen ",
    img: "/images/luxgen.png",
    count: 0,
  },
  MAZDA: {
    title: "Mazda",
    img: "/images/mazda.png",
    count: 0,
  },
  MERCEDES: {
    title: "Mercedes",
    img: "/images/mercedes.png",
    count: 0,
  },
  MINI: {
    title: "MINI",
    img: "/images/mini.png",
    count: 0,
  },
  MITSUBISHI: {
    title: "Mitsubishi",
    img: "/images/mitsubishi.png",
    count: 0,
  },
  NISSAN: {
    title: "Nissan",
    img: "/images/nissan.png",
    count: 0,
  },
  OPEL: {
    title: "Opel",
    img: "/images/opel.png",
    count: 0,
  },
  PEUGEOT: {
    title: "Peugeot",
    img: "/images/peugeot.png",
    count: 0,
  },
  PORSCHE: {
    title: "Porsche",
    img: "/images/porsche.png",
    count: 0,
  },
  RAVON: {
    title: "Ravon",
    img: "/images/ravon.png",
    count: 0,
  },
  RENAULT: {
    title: "Renault",
    img: "/images/renault.png",
    count: 0,
  },
  SEAT: {
    title: "Seat",
    img: "/images/seat.png",
    count: 0,
  },
  SKODA: {
    title: "Skoda",
    img: "/images/skoda.png",
    count: 0,
  },
  SSANG_YONG: {
    title: "Ssang Yong",
    img: "/images/ssangyong.png",
    count: 0,
  },
  SUBARU: {
    title: "Subaru",
    img: "/images/subaru.png",
    count: 0,
  },
  SUZUKI: {
    title: "Suzuki",
    img: "/images/suzuki.png",
    count: 0,
  },
  TOYOTA: {
    title: "Toyota",
    img: "/images/toyota.png",
    count: 0,
  },
  VOLKSWAGEN: {
    title: "Volkswagen",
    img: "/images/volkswagen.png",
    count: 0,
  },
  VOLVO: {
    title: "Volvo",
    img: "/images/volvo.png",
    count: 0,
  },
  VORTEX: {
    title: "Vortex",
    img: "/images/vortex.png",
    count: 0,
  },
  ZOTYE: {
    title: "Zotye",
    img: "/images/zotye.png",
    count: 0,
  },
  ГАЗЕЛЬ: {
    title: "Газель",
    img: "/images/gaz.png",
    count: 0,
  },
  ЗАЗ: {
    title: "ЗАЗ",
    img: "/images/zaz.png",
    count: 0,
  },
  УАЗ: {
    title: "УАЗ",
    img: "/images/uaz.png",
    count: 0,
  },
});

export const Months = [
  "Январе",
  "Феврале",
  "Марте",
  "Апреле",
  "Мае",
  "Июне",
  "Июле",
  "Августе",
  "Сентябре",
  "Октябре",
  "Ноябре",
  "Декабре",
];

export const MonthsOther = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

export const SITE_DOMEN = "https://vegamotormsk.ru/";
export const SERVER_HOST = "https://vegamotormsk.ru/";

export const CarsBodys = Object.freeze({
  BORTOVOY_GRUZOVIK: "Бортовой грузовик",
  VNEDOROZHNIK: "Внедорожник",
  IZOTERM: "Изотермический кузов",
  KABRIOLET: "Кабриолет",
  KOMPACT_VEN: "Компактвэн",
  KUPE: "Купэ",
  LIMUZIN: "Лимузин",
  LIFTBEK: "Лифтбэк",
  MIKROAVTOBUS: "Микроавтобус",
  MINIVEN: "Минивэн",
  PICKUP: "Пикап",
  PROMTOVARNYI_AVTOFURGON: "Промтоварный автофургон",
  REFRIZHERATOR: "Рефрижератор",
  SEDAN: "Седан",
  UNIVERSAL: "Универсал",
  FURGON: "Фургон",
  HATCHBACK: "Хэтчбэк",
  FURGON_METAL: "Цельнометаллический фургон",
});

export const CarBodysValues = Object.values(CarsBodys);

export const CarsEngines = Object.freeze({
  BENZIN: "Бензин",
  DIZEL: "Дизель",
  GAZ: "Газ",
  GAZ_BENZIN: "Газ/Бензин",
  GIBRID: "Гибрид",
});

export const CarsEnginesValues = Object.values(CarsEngines);

export const CarsDrives = Object.freeze({
  PEREDNIY: "Передний",
  ZADNIY: "Задний",
  POLNIY: "Полный",
});

export const CarsDrivesValues = Object.values(CarsDrives);

export const CarsKpps = Object.freeze({
  AUTOMAT: "Автомат",
  AUTOMAT_VARIATOR: "Автомат вариатор",
  AUTOMAT_ROBOT: "Автомат робот",
  HAND: "Механическая",
});

export const CarsKppsValues = Object.values(CarsKpps);

export const CarsWheels = Object.freeze({
  RIGHT: "Правый",
  LEFT: "Левый",
});

export const CarsWheelsValues = Object.values(CarsWheels);
