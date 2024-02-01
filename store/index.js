// import { getCars } from "../carsDefault";
import { resolveMappedData, resolveFetchString } from "./storeUtils";

export const state = () => ({
  cars: [],
  carsMeta: null,
  isLoading: false,
});

export const mutations = {
  SET_CARS: (state, payload) => {
    state.cars = [...state.cars, ...payload];
  },
  TOGGLE_LOADING: (state, payload) => {
    state.isLoading = payload;
  },
  CLEAR_CARS: (state) => {
    state.cars = [];
  },
  SET_CARS_FROM_CACHE: (state, payload) => {
    state.cars = payload;
  },
  SET_CARS_META: (state, payload) => {
    state.carsMeta = payload;
  },
};

export const actions = {
  async getCars({ commit }, payload) {
    const res = await fetch(resolveFetchString(payload));
    const data = await res.json();
    //const data = getCars({ take: payload.take, skip: payload.skip });
    const mappedData = resolveMappedData(data);
    commit("SET_CARS", mappedData);
  },
  async getCarsComponentData({ commit }, payload) {
    const res = await fetch(resolveFetchString(payload));
    const data = await res.json();
    const mappedData = resolveMappedData(data);
    return mappedData;
  },
  async getCarsMeta({ commit }, payload) {
    const res = await fetch(resolveFetchString(payload, "partial"));
    const data = await res.json();
    commit("SET_CARS_META", data);
  },
  async getCarsByFilter({ commit }, payload) {
    const res = await fetch(resolveFetchString(payload, "filter"));
    const data = await res.json();
    const mappedData = resolveMappedData(data);
    commit("SET_CARS", mappedData);
  },
  async getCarsByFilterComponentData({ commit }, payload) {
    const res = await fetch(resolveFetchString(payload, "filter"));
    const data = await res.json();
    const mappedData = resolveMappedData(data);
    return mappedData;
  },
  async getCarById({ commit }, payload) {
    const res = await fetch(resolveFetchString(payload, "find"));
    const data = await res.json();
    const mappedData = resolveMappedData(data);
    return mappedData;
  },
  getCar({ commit, state }, param) {
    const car = state.cars.find(({ id }) => id === param);
    return car != null ? car : null;
  },
  clearCars({ commit }) {
    commit("CLEAR_CARS");
  },
  setCarsFromCache({ commit }, payload) {
    commit("SET_CARS_FROM_CACHE", payload);
  },
  toggleLoading({ commit }, payload) {
    commit("TOGGLE_LOADING", payload);
  },
};

export const getters = {
  CARS: (state) => {
    return state.cars;
  },
  CARS_META: (state) => {
    return state.carsMeta;
  },
  IS_LOADING: (state) => {
    return state.isLoading;
  },
};
