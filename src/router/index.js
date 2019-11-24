import Vue from 'vue'
import Router from 'vue-router'
// 引入公共的组件
import Header from '@/components/common/Header.vue'
import Left from '@/components/common/Left.vue'
// 引入首页改变的内容
import Index from '@/components/index/index.vue'
// 引入登录页面
import Login from '@/components/login/Login.vue'
import Forget from '@/components/login/forget.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Index,
        Header: Header,
        Left: Left
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/forget',
      components: {
        default: Forget,
        Header: Header
      }
    }
  ]
})
