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
        {id: 1, name: "Samsung", model: "s4"},
        {id: 2, name: "Sony Eriction", model: "cybershot"},
        {id: 3, name: "Nokia", model: "N95"},
      ]
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;