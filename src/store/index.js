import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  // 登录后的用户状态
  token: '',
  userinfo: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})
