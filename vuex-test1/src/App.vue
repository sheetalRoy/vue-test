<template>
  <base-container title="Vuex" v-if="isAuth">
    <favorite-value></favorite-value>
    <test-count></test-count>
    <button @click="addOne">Increment</button>
    <button @click="reset">Reset</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
import TestCount from './components/TestCount.vue';
import FavoriteValue from './components/FavoriteValue.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    "base-container": BaseContainer,
    "user-auth": UserAuth,
    "test-count": TestCount,
    "favorite-value": FavoriteValue
  },
  computed: {
    isAuth() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    addOne() {
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'increase',
        value: 1,
      });
    },
    ...mapActions(["reset"]),
    
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>