<template>
  <base-container title="Vuex Tutorial" >
    <add-todo></add-todo>
  </base-container>
  <base-container title="Todos List">
    <todos></todos>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
export default {
  components: {
    "base-container":BaseContainer,
    "todos": Todos,
    "add-todo": AddTodo
  },
  computed: {
    
  },
  methods: {
    // addOne() {
    //   // this.$store.dispatch('increase', { value: 10 });
    //   this.$store.dispatch({
    //     type: 'numbers/increase',
    //     value: 10,
    //   });
   // },
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