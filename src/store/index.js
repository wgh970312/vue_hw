import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import count from "./modules/count";

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    count
  }
});
