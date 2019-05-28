<template>
  <div id="app">
    <headerapp ></headerapp>
    <contentapp>
      <router-view/>
    </contentapp>
  </div>
</template>
<script>
  import firebase  from './config.firebase';
  import { mapState} from 'vuex';
  export default {
    name:'App',
    components:{
      'headerapp' :  () => import('./components/HeaderApp'),
      'contentapp' :  () => import('./components/ContentApp'),
    },
    data(){
      return{
      }
    },
    created() {
      let vm = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          vm.$store.commit('setLogin',true);
        }else{
          vm.$store.commit('setLogin',false);
        }
      });
    },
    computed:{
      ...mapState({
        is_login: state => state.is_login
      })
    }
  }
</script>

<style lang="scss">
#app {

}
</style>
