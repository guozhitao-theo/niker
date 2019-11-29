import Vue from 'vue'
import Router from 'vue-router'
// 引入公共的组件
import Header from '@/components/common/Header.vue'
// import Left from '@/components/common/Left.vue'
// 引入首页改变的内容
// import Index from '@/components/index/index.vue'
// 引入登录页面
import Login from '@/components/login/Login.vue'
import Setting from '@/components/login/setting.vue'
import changePassword from '@/components/login/changePassword.vue'
import stepSecond from '@/components/login/stepSecond.vue'
import customize from '@/components/login/customize.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   components: {
    //     default: Index,
    //     Header: Header,
    //     Left: Left
    //   }
    // },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/setting',
      components: {
        default: Setting,
        Header: Header
      },
      children: [{
        path: '',
        component: changePassword
      },
      {
        path: 'stepStore',
        component: stepSecond,
        meta: {
          keepAlive: 'true'
        }
      },
      {
        path: 'customize',
        component: customize
      }]
    }
  ]
})
