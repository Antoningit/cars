import { SERVER_HOST } from "../constants";
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
    const res = await fetch(`${SERVER_HOST}getcars`);
    const data = await res.json();
    const mappedData = data.map((car) => {
      const image = `${SERVER_HOST}${car.image}`;
      return {
        ...car,
        image,
        images: JSON.parse(car.images).map((image) => `${SERVER_HOST}${image}`),
        engine: car.car_engine,
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
