import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
import stepStatus from './stepStatus'

Vue.use(Vuex)

const store = {
  modules: {
    user: User,
    stepStatus: stepStatus
  }
}
export default new Vuex.Store(store)
