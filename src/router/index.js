/*
路由器模块
 */

//引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)

//向外暴露
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter:true,
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true,
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true,
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true,
      }
    },
    //默认路由
    {
      path:'/',
      redirect:'/msite',
    },
    {
      path:'/login',
      component:Login,
    },
  ]
})
