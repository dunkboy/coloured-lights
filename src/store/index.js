import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// import model from '../model/model.js'a

Vue.use(Vuex)

const state = {
  // 登录后的用户状态
  token: '',
  userinfo: class Userinfo {
    constructor (id, loginName, nickname, avatar, superAdminIs, lastLoginTime, funcPerms) {
      this.id = id
      this.loginName = loginName
      this.nickname = nickname
      this.avatar = avatar
      this.superAdminIs = superAdminIs
      this.lastLoginTime = lastLoginTime
      this.funcPerms = funcPerms
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})
