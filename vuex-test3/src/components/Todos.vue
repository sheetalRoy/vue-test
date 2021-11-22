<template>
    <div>
        <h4>Todos</h4>
        <div v-for="prod in productList" :key="prod">
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