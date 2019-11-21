import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
console.log(User)
Vue.use(Vuex)

const store = {
  modules: {
    user: User
  }
}
export default new Vuex.Store(store)
