import { createStore } from 'vuex';

const store = createStore({
  state:{
    isLoggedIn: false,
    counter: 0
  },
  getters:{
    userIsAuthenticated(state) {
      console.log(state)
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
    // increment(context) {
    //   setTimeout(function() {
    //     context.commit('increment');
    //   }, 2000);
    // },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
    reset(context) {
      context.commit('reset');
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
    // increment(state) {
    //   state.counter = state.counter + 2;
    // },
    increase(state, payload) {
      console.log(state);
      state.counter = state.counter + payload.value;
    },
    reset(state){
      state.counter = 0;
    }
  }
})


export default store;