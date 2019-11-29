// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import '../theme/index.css'
import {request, get, post} from 'commonjs/axios'
import staticRoutes from './router/staticRoutes.js'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/setting' || to.path === 'stepStore' || to.path === 'customize' || to.path === '/setting/stepStore' || to.path === '/setting/customize') {
    next()
  } else {
    if (Object.keys(store.state.module.chooseModule).length <= 0) {
      let chooseModule = ''
      let customizeModule = JSON.parse(window.localStorage.getItem('customizeModule'))
      let universalModule = JSON.parse(window.localStorage.getItem('universalModule'))
      if (customizeModule) {
        chooseModule = customizeModule
      } else {
        chooseModule = universalModule
      }
      let arr = []
      for (var prop in chooseModule) {
        let routerModule = staticRoutes.find((itemRoute) => {
          return (itemRoute.name === chooseModule[prop].name)
        })
        Object.assign(chooseModule[prop], routerModule)
        arr.push(chooseModule[prop])
      }
      store.commit('module/changeChooseModule', chooseModule)
      router.addRoutes([{
        path: '/',
        components: {
          default: () => import('main/index.vue'),
          Header: () => import('@/components/common/Header.vue'),
          Left: () => import('@/components/common/Left.vue')
        },
        children: arr
      }])
      next({...to, replace: true})
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
