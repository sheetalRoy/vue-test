<template>
    <h3>Add Todo</h3>
    <div class="add">
        <form>
            <input type="text"/>
            <button type="button" @click="addCompany">Add</button>
        </form>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    methods:{
        ...mapActions(["addCompany"])
    }    
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>