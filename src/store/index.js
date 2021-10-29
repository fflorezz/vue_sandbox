import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {},
  actions: {
    increment({ commit }, payload) {
      commit('increment', payload)
    },
  },
  mutations: {
    increment(state, payload) {
      state.count = state.count + payload
    },
  },
  modules: {},
})
