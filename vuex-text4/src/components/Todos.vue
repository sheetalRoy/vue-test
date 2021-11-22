<template>
    <div>
        <h4>Todos</h4>
        <div class="prod-content" v-for="prod in productList" :key="prod">
            <h6>Name :{{ prod.name}}</h6>
            <p>Model :{{prod.model}}</p>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        productList(){
            return this.$store.state.company;
        }
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