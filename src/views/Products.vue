<template>
    <div class="col-md-6 col-sm-12">
        <products></products>
    </div>
</template>

<script>
    export default {
        name: "Products",
        components:{
            'products' :  () => import('../components/Products'),
        }
    }
</script>

<style scoped>

</style>