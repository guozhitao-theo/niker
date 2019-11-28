import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
import stepStatus from './stepStatus'
import module from './module'

Vue.use(Vuex)

const store = {
  modules: {
    user: User,
    stepStatus: stepStatus,
    module: module
  }
}
export default new Vuex.Store(store)
