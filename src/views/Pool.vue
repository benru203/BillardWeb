<template>
    <div class="col-md-6 col-sm-12">
        <pools></pools>
    </div>
</template>

<script>

    export default {
        name: "Pool",
        components:{
            'pools' :  () => import('../components/Pools'),
        }

    }
</script>

<style scoped>

</style>