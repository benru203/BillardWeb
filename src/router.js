import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Pool from './views/Pool';
import Products from './views/Products';

Vue.use(Router);

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:Home,
     /* meta:{
        auth:true
      }
      */
    },
    {
      path:'/Pools',
      name:'pools',
      component:Pool
    },
    {
      path:'/Products',
      name:'products',
      component:Products
    }
  ]
});

export default route;
