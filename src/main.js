// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import '../theme/index.css'
import {request, get, post} from 'commonjs/axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
