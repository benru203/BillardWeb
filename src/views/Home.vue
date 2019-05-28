<template>
  <div class="col-12">
    <div class="row justify-content-center">
      <template v-for="(pool, index) in pools">
        <pool :key="index"></pool>
      </template>
    </div>
  </div>
</template>

<script>
  import firebase from '../config.firebase'
  let DB = firebase.database();
  let Pools = DB.ref('pools');
export default {
  name: 'home',
  firebase:{
    pools : Pools,
  },
  components: {
    'pool': () => import('../components/Pool')
  },
  created(){
  },
  methods: {
  }
}
</script>
