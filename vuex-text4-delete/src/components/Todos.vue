<template>
    <div>
        <h4>Todos</h4>
        <h5>Total Company: {{totalCompany }}</h5>
        <div class="prod-content" v-for="prod in productList" :key="prod.id">
            <h6>Name :{{ prod.name}}</h6>
            <p>Model :{{prod.model}}</p>
            <button @click="deleteCompany(prod.id)">Delete</button>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["totalCompany"]),
        productList(){
            return this.$store.state.company;
        }
        
    },
    methods: {
        ...mapActions(["deleteCompany"])
    }
}
</script>

<style scoped>
.prod-content{
    border: 1px solid #777;
    padding: 10px;
    margin-bottom: 5px;
}
</style>