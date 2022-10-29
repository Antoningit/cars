import {
  SERVER_HOST,
  CarBodysValues,
  CarsEnginesValues,
  CarsDrivesValues,
  CarsKppsValues,
  CarsTitles,
  CarsWheelsValues,
} from "../constants";
export const state = () => ({
  cars: [],
});

export const mutations = {
  SET_CARS: (state, payload) => {
    state.cars = payload;
  },
};

export const actions = {
  async nuxtServerInit(vuexContext) {
    await vuexContext.dispatch("getCars", { root: true });
  },
  async getCars({ commit }, payload) {
    const res = await fetch(`${SERVER_HOST}car`);
    const data = await res.json();
    const mappedData = data.map((car) => {
      const image = `${SERVER_HOST}uploads/${car.image}`;
      return {
        ...car,
        body: CarBodysValues[car.body],
        drive: CarsDrivesValues[car.drive],
        kpp: CarsKppsValues[car.kpp],
        title: CarsTitles[car.title],
        wheel: CarsWheelsValues[car.wheel],
        image,
        images: car.images.map((image) => `${SERVER_HOST}uploads/${image}`),
        engine: CarsEnginesValues[car.car_engine],
        mod: car.car_mod,
      };
    });
    commit("SET_CARS", mappedData);
  },
  getCar({ commit, state }, param) {
    const car = state.cars.find(({ id }) => id === param);
    return car != null ? car : null;
  },
};

export const getters = {
  CARS: (state) => {
    return state.cars;
  },
};
