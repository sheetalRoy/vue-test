import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
// import counterModule from './modules/counter/index.js';

const store = createStore({
  // modules: {
  //   numbers: counterModule // this modules should be in modules folder and this is sub store
  // },
  state() {
    return {
      company: [
        {name: "Samsung", model: "s4"},
        {name: "Sony Eriction", model: "cybershot"},
        {name: "Nokia", model: "N95"},
      ]
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;