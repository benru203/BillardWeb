<template>
    <div class="col-md-3 col-sm-12">
        <login></login>
    </div>
</template>

<script>
    export default {
        name: "Login",
        components:{
            'login': ()=> import('@/components/Login')
        }
    }
</script>

<style scoped>

</style>