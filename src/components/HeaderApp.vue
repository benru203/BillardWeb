<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link :to="(is_login?'/Home':'/')" class="navbar-brand" tag="a">Billard</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="is_login" class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link tag="a" to="/Pools" class="nav-link">Mesas</router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="a" to="/Products" class="nav-link">Productos</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="logOut">Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import firebase from '../config.firebase';
    import { mapState} from 'vuex';
    export default {
        name: "HeaderApp",
        methods:{
            logOut(){
                firebase.auth().signOut().then((response)=>{
                    this.$router.replace('/');
                },(error)=>console.error(error));
            }
        },
        computed:{
            ...mapState({
                is_login: state => state.is_login
            })
        }

    }
</script>

<style scoped>

</style>