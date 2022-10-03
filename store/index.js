export const state = () => ({
  users: [],
});

export const mutations = {
  SET_USERS: (state, payload) => {
    state.users = payload;
  },
};

export const actions = {
  async getUsers({ commit }, payload) {
    const res = await fetch("http://localhost:3333/users");
    const data = await res.json();
    commit("SET_USERS", data);
  },
};

export const getters = {
  USERS: (state) => {
    return state.users;
  },
};
