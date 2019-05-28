<template>
    <div class="card ">
        <div class="card-header  bg-info text-light">
            <h2>Iniciar Sesión</h2>
        </div>
        <div class="card-body">
            <form @submit.prevent="login"  class="form">
                <div class="form-group">
                    <label >Correo Electrónico</label>
                    <input v-model="user.email" type="text" class="form-control" placeholder="correo electrónico">
                </div>
                <div class="form-group">
                    <label >Contraseña</label>
                    <input v-model="user.pass" type="password" class="form-control" placeholder="contraseña">
                </div>
                <div class="form-group text-center">
                    <button class="btn btn-primary" type="submit">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import firebase from '@/config.firebase';
    class Login {
        constructor(){
            this.email = '';
            this.pass = ''
        }
    }
    export default {
        name: "Login",
        data(){
            return{
                user : new Login(),
            }
        },
        methods:{
            login(){
                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.pass).then((response)=>{
                    console.log(response);
                    this.$router.push('/Home');
                },(error) =>console.error(error));
            }
        }
    }
</script>

<style scoped>

</style>