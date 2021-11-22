<template>
    <h3>Add Todo</h3>
    <div class="add">
        <form @submit.prevent='add'>
          <div class="form-group">
            <label for="name">Name: </label>
            <input type="text"  v-model="name"/>
          </div>
          <div class="form-group">
            <label for="model" >Model: </label>
            <input type="text" v-model="model"/>
          </div>
            <button>Add</button>
        </form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data(){
    return{
      name:'',
      model:''
    }
  },
  computed: {
    ...mapGetters(["totalCompany"])
  },
  methods:{
    ...mapActions(["addCompany"]),
        add(){
          const id = this.totalCompany;
          const obj = {id: id, name: this.name, model:this.model}
          this.addCompany(obj);
        },
    }    
}
</script>

<style scoped>
/* form {
  display: flex;
} */
.form-group{
  display: flex;
  margin-bottom: 5px;
}
.form-group label{
  flex: 3;
}
.form-group input[type="text"]{
  flex: 9;
}
input[type="text"] {
  /* flex: 10; */
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